import { useEffect, useState } from "react";

function format(timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  })
    .format(new Date())
    .toLowerCase();
}

/** Current wall-clock time in a timezone, re-rendered once a minute. */
export function useLocalTime(timeZone: string): string {
  const [time, setTime] = useState(() => format(timeZone));
  useEffect(() => {
    const tick = () => setTime(format(timeZone));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [timeZone]);
  return time;
}
