"use client";

import { useEffect, useState } from "react";
import { windSpot } from "@/content/site";

export type Wind = { kn: number; gust: number | null; from: number; temp: number | null; live: boolean };

export const FALLBACK_WIND: Wind = { kn: 14, gust: null, from: 135, temp: null, live: false };

const COMPASS = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
export const compass = (deg: number) => COMPASS[Math.round(deg / 45) % 8];
// Rough kite size for a ~95 kg rider
export const kiteFor = (kn: number) => (kn < 10 ? "—" : kn < 14 ? "12M" : kn < 19 ? "10M" : kn < 25 ? "8M" : "6M");

const URL = `https://api.open-meteo.com/v1/forecast?latitude=${windSpot.lat}&longitude=${windSpot.lon}&current=wind_speed_10m,wind_gusts_10m,wind_direction_10m,temperature_2m&wind_speed_unit=kn`;

let cache: Promise<Wind> | null = null;
function load(): Promise<Wind> {
  cache ??= fetch(URL)
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((d) => ({
      kn: Math.round(d.current.wind_speed_10m),
      gust: Math.round(d.current.wind_gusts_10m),
      from: d.current.wind_direction_10m,
      temp: Math.round(d.current.temperature_2m),
      live: true,
    }))
    .catch(() => FALLBACK_WIND);
  return cache;
}

export function useWind(onChange?: (w: Wind) => void) {
  const [wind, setWind] = useState<Wind>(FALLBACK_WIND);
  useEffect(() => {
    let alive = true;
    load().then((w) => {
      if (!alive) return;
      setWind(w);
      onChange?.(w);
    });
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return wind;
}
