"use client";

import { useEffect, useRef } from "react";
import { windSpot } from "@/content/site";
import { useWind, compass, kiteFor, FALLBACK_WIND, type Wind } from "@/lib/wind";

export default function WindHero({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const kiteRef = useRef<SVGGElement>(null);
  const lineL = useRef<SVGLineElement>(null);
  const lineR = useRef<SVGLineElement>(null);
  const windRef = useRef<Wind>(FALLBACK_WIND);
  const gust = useRef(0);
  const spin = useRef(0);
  const wind = useWind((w) => (windRef.current = w));

  useEffect(() => {
    const wrap = wrapRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0, h = 0, dpr = 1, raf = 0, visible = true;
    let particles: { x: number; y: number; age: number; life: number }[] = [];
    const pointer = { x: 0, y: 0, active: false, lastMove: 0 };
    const kite = { x: 0, y: 0, vx: 0, vy: 0 };

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(900, Math.floor((w * h) / 2200));
      particles = Array.from({ length: n }, () => spawn(true));
      if (!kite.x) {
        kite.x = w * 0.68;
        kite.y = h * (w < 640 ? 0.13 : 0.3);
      }
      ctx.fillStyle = "#0b0f14";
      ctx.fillRect(0, 0, w, h);
    };
    const spawn = (anywhere = false) => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : Math.random() * h,
      age: 0,
      life: 80 + Math.random() * 160,
    });

    const anchor = () => ({ x: w * (w < 640 ? 0.85 : 0.62), y: h + 40 });

    const step = (t: number) => {
      const wd = windRef.current;
      const to = ((wd.from + 180) * Math.PI) / 180;
      const base = 0.6 + Math.min(wd.kn, 35) / 9;
      const boost = 1 + gust.current * 2.5;
      gust.current *= 0.97;
      const wx = Math.sin(to) * base * boost;
      const wy = -Math.cos(to) * base * boost;

      // fade trails
      ctx.fillStyle = "rgba(11,15,20,0.09)";
      ctx.fillRect(0, 0, w, h);
      ctx.lineWidth = 1;

      for (const p of particles) {
        const n = Math.sin(p.x * 0.004 + t * 0.0003) + Math.cos(p.y * 0.005 - t * 0.0002);
        let vx = wx + Math.cos(n * 2) * 0.6;
        let vy = wy + Math.sin(n * 2) * 0.6;
        if (pointer.active) {
          const dx = p.x - pointer.x, dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 22000) {
            const f = (1 - d2 / 22000) * 2.2;
            vx += (-dy / 120) * f;
            vy += (dx / 120) * f;
          }
        }
        const nx = p.x + vx, ny = p.y + vy;
        const a = Math.sin((p.age / p.life) * Math.PI) * 0.55;
        ctx.strokeStyle = `rgba(236,230,216,${a})`;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();
        p.x = nx;
        p.y = ny;
        p.age++;
        if (p.age > p.life || p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20) Object.assign(p, spawn());
      }

      // kite: follow pointer, otherwise fly a figure-8
      const idle = !pointer.active || t - pointer.lastMove > 2500;
      const mobile = w < 640;
      const cx = mobile ? w * 0.62 : w * 0.68, cy = mobile ? h * 0.13 : h * 0.3;
      const tx = idle ? cx + Math.sin(t * 0.0006) * w * (mobile ? 0.22 : 0.14) : pointer.x;
      const ty = idle ? cy + Math.sin(t * 0.0012) * h * (mobile ? 0.03 : 0.08) : Math.min(pointer.y, h * 0.75);
      kite.vx = (kite.vx + (tx - kite.x) * 0.012) * 0.86;
      kite.vy = (kite.vy + (ty - kite.y) * 0.012) * 0.86;
      kite.x += kite.vx;
      kite.y += kite.vy;
      spin.current *= 0.93;
      const tilt = Math.max(-35, Math.min(35, kite.vx * 3)) + spin.current;
      kiteRef.current?.setAttribute("transform", `translate(${kite.x} ${kite.y}) rotate(${tilt})`);

      const an = anchor();
      const rad = (tilt * Math.PI) / 180;
      const tip = (side: number) => ({
        x: kite.x + Math.cos(rad) * 52 * side - Math.sin(rad) * 18,
        y: kite.y + Math.sin(rad) * 52 * side + Math.cos(rad) * 18,
      });
      const L = tip(-1), R = tip(1);
      lineL.current?.setAttribute("x1", String(L.x));
      lineL.current?.setAttribute("y1", String(L.y));
      lineR.current?.setAttribute("x1", String(R.x));
      lineR.current?.setAttribute("y1", String(R.y));
      for (const l of [lineL.current, lineR.current]) {
        l?.setAttribute("x2", String(an.x));
        l?.setAttribute("y2", String(an.y));
      }

      if (!reduce && visible) raf = requestAnimationFrame(step);
    };

    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.active = pointer.y >= 0 && pointer.y <= r.height;
      pointer.lastMove = performance.now();
    };
    const onLeave = () => (pointer.active = false);
    const onClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button")) return;
      gust.current = 1;
      spin.current = 360;
    };

    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduce) raf = requestAnimationFrame(step);
    });

    resize();
    if (reduce) {
      for (let i = 0; i < 60; i++) step(i * 16);
    } else {
      raf = requestAnimationFrame(step);
    }
    io.observe(wrap);
    window.addEventListener("resize", resize);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    wrap.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      wrap.removeEventListener("click", onClick);
    };
  }, []);

  const kiteable = wind.kn >= 12;

  return (
    <section ref={wrapRef} className="relative isolate flex min-h-[100svh] items-center overflow-hidden" aria-label="Intro">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 h-full w-full" aria-hidden />
      <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full" aria-hidden>
        <line ref={lineL} stroke="rgba(236,230,216,0.35)" strokeWidth="0.8" />
        <line ref={lineR} stroke="rgba(236,230,216,0.35)" strokeWidth="0.8" />
        <g ref={kiteRef}>
          <g transform="translate(-60 -30)">
            <path d="M4 50 Q60 -18 116 50 Q60 8 4 50 Z" fill="#ff5a2c" />
            <path d="M4 50 Q60 -18 116 50" fill="none" stroke="#ffd2c2" strokeWidth="3" strokeLinecap="round" />
            {[30, 45, 60, 75, 90].map((x) => (
              <line key={x} x1={x} y1={x === 60 ? 2 : 12} x2={x} y2={x === 60 ? 28 : 30} stroke="#ffd2c2" strokeWidth="1.2" opacity="0.7" />
            ))}
          </g>
        </g>
      </svg>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" aria-hidden />

      <div className="container-x pt-24 pb-28">{children}</div>

      <div className="absolute inset-x-0 bottom-6">
        <div className="container-x flex flex-wrap items-end justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
          <p aria-live="polite">
            <span className={wind.live ? "text-sea" : ""}>{wind.live ? "● Live" : "○ Demo"}</span>
            {" · "}
            {windSpot.name} · Wind {wind.kn} kn {compass(wind.from)}
            {wind.temp !== null && ` · ${wind.temp}°C`} · Kite {kiteFor(wind.kn)}
            <span className="ml-2 normal-case tracking-normal text-sand/60">
              {kiteable ? "Kiteable. I might be on the water." : "Light wind. I'm at my desk."}
            </span>
          </p>
          <p className="hidden sm:block">Move to fly · click to loop</p>
        </div>
      </div>
    </section>
  );
}
