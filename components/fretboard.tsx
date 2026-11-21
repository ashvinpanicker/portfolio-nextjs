"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

// Low E → high E
const OPEN = [82.41, 110.0, 146.83, 196.0, 246.94, 329.63];
const NAMES = ["E", "A", "D", "G", "B", "e"];
const FRETS = 5;

// null = muted string
const CHORDS: Record<string, (number | null)[]> = {
  Em: [0, 2, 2, 0, 0, 0],
  G: [3, 2, 0, 0, 0, 3],
  C: [null, 3, 2, 0, 1, 0],
  D: [null, null, 0, 2, 3, 2],
  Am: [null, 0, 2, 2, 1, 0],
};

// Karplus–Strong plucked string
function pluck(ctx: AudioContext, freq: number) {
  const sr = ctx.sampleRate;
  const len = Math.floor(sr * 1.8);
  const period = Math.max(2, Math.round(sr / freq));
  const buf = ctx.createBuffer(1, len, sr);
  const out = buf.getChannelData(0);
  const ring = new Float32Array(period);
  for (let i = 0; i < period; i++) ring[i] = Math.random() * 2 - 1;
  let idx = 0;
  for (let i = 0; i < len; i++) {
    const next = (idx + 1) % period;
    out[i] = ring[idx];
    ring[idx] = 0.498 * (ring[idx] + ring[next]);
    idx = next;
  }
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.25, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);
  src.connect(gain).connect(ctx.destination);
  src.start();
}

export default function Fretboard() {
  const ctxRef = useRef<AudioContext | null>(null);
  const lastString = useRef<number | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [chord, setChord] = useState<keyof typeof CHORDS>("Em");
  const [ringing, setRinging] = useState<Record<number, number>>({});

  useEffect(() => () => void ctxRef.current?.close(), []);

  const enableSound = () => {
    if (!ctxRef.current) {
      const AC = window.AudioContext || (window as any).webkitAudioContext;
      ctxRef.current = new AC();
    }
    ctxRef.current.resume();
    setSoundOn(true);
  };

  const play = useCallback(
    (s: number) => {
      const fret = CHORDS[chord][s];
      if (fret === null) return;
      setRinging((r) => ({ ...r, [s]: Date.now() }));
      if (soundOn && ctxRef.current) pluck(ctxRef.current, OPEN[s] * Math.pow(2, fret / 12));
    },
    [chord, soundOn]
  );

  // Strings render high e on top (tab style): row 0 = string 5
  const stringFromY = (clientY: number) => {
    const el = boardRef.current;
    if (!el) return null;
    const { top, height } = el.getBoundingClientRect();
    const row = Math.floor(((clientY - top) / height) * 6);
    if (row < 0 || row > 5) return null;
    return 5 - row;
  };

  const onMove = (e: React.PointerEvent) => {
    const s = stringFromY(e.clientY);
    if (s !== null && s !== lastString.current) {
      lastString.current = s;
      play(s);
    }
  };

  const strum = () => {
    if (!soundOn) enableSound();
    [0, 1, 2, 3, 4, 5].forEach((s, i) => setTimeout(() => play(s), i * 35));
  };

  return (
    <div className="w-full max-w-[36rem] mx-auto select-none">
      <div className="flex items-center justify-between mb-2 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex gap-1">
          {Object.keys(CHORDS).map((c) => (
            <button
              key={c}
              onClick={() => setChord(c)}
              className={clsx(
                "px-2.5 py-1 rounded-full border transition",
                c === chord
                  ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white"
                  : "border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/40"
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <button
          onClick={soundOn ? () => setSoundOn(false) : enableSound}
          className="px-2.5 py-1 rounded-full border border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/40 transition"
          aria-pressed={soundOn}
        >
          {soundOn ? "♪ sound on" : "♪ tap for sound"}
        </button>
      </div>

      <div
        ref={boardRef}
        role="img"
        aria-label={`Guitar fretboard showing a ${chord} chord. Hover or drag across the strings to play.`}
        onPointerMove={onMove}
        onPointerLeave={() => (lastString.current = null)}
        onPointerDown={(e) => {
          if (!soundOn) enableSound();
          (e.target as Element).releasePointerCapture?.(e.pointerId);
        }}
        className="relative h-36 rounded-xl overflow-hidden cursor-crosshair touch-none bg-gradient-to-b from-[#6b4226] to-[#4a2c19] shadow-inner ring-1 ring-black/20"
      >
        {/* nut + frets */}
        <div className="absolute inset-y-0 left-[6%] w-1.5 bg-[#efe6d2]" />
        {Array.from({ length: FRETS }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-gray-300 to-gray-400"
            style={{ left: `${6 + ((i + 1) * 94) / FRETS}%` }}
          />
        ))}
        {/* inlay on 3rd and 5th */}
        {[3, 5].map((f) => (
          <div
            key={f}
            className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#efe6d2]/60"
            style={{ left: `calc(${6 + ((f - 0.5) * 94) / FRETS}% - 6px)` }}
          />
        ))}

        {/* strings, high e on top */}
        {[5, 4, 3, 2, 1, 0].map((s, row) => {
          const fret = CHORDS[chord][s];
          const muted = fret === null;
          const top = `${((row + 0.5) * 100) / 6}%`;
          return (
            <React.Fragment key={s}>
              <span
                className="absolute left-1 text-[10px] font-mono text-[#efe6d2]/70 -translate-y-1/2"
                style={{ top }}
              >
                {muted ? "×" : NAMES[s]}
              </span>
              <div
                key={ringing[s]}
                className={clsx(
                  "absolute left-[6%] right-0 -translate-y-1/2 bg-gradient-to-b from-[#f5f0e6] to-[#b9a98a]",
                  muted ? "opacity-30" : ringing[s] && "animate-string"
                )}
                style={{ top, height: `${1 + (5 - row) * 0.35}px` }}
              />
              {!!fret && (
                <div
                  className="absolute h-4 w-4 -translate-y-1/2 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                  style={{ top, left: `${6 + ((fret - 0.5) * 94) / FRETS}%` }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>Hover or drag across the strings.</span>
        <button onClick={strum} className="underline decoration-dotted underline-offset-4 hover:text-gray-900 dark:hover:text-white">
          strum it →
        </button>
      </div>
    </div>
  );
}
