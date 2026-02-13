"use client";

import { useEffect, useRef, useState } from "react";

// Date of birth: 15 October 2003 (month is 0-indexed: October = 9)
const BIRTH_YEAR = 2003;
const BIRTH_MONTH = 9; // October
const BIRTH_DAY = 15;

/**
 * Get the most recent birthday in the client's local timezone.
 * - If today is before Oct 15 → last birthday = Oct 15 of previous year.
 * - If today is on or after Oct 15 → last birthday = Oct 15 of current year.
 */
function getLastBirthday(now: Date): Date {
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const isBeforeBirthday =
    month < BIRTH_MONTH || (month === BIRTH_MONTH && date < BIRTH_DAY);
  const lastBirthdayYear = isBeforeBirthday ? year - 1 : year;
  return new Date(lastBirthdayYear, BIRTH_MONTH, BIRTH_DAY, 0, 0, 0, 0);
}

/**
 * Completed full years since birth (year of last birthday minus birth year).
 */
function getCompletedYears(lastBirthday: Date): number {
  return lastBirthday.getFullYear() - BIRTH_YEAR;
}

/**
 * Milliseconds elapsed since the most recent birthday (00:00:00 local).
 * Resets to 0 at exactly 00:00:00 on each birthday.
 */
function getMsSinceLastBirthday(lastBirthday: Date): number {
  return Date.now() - lastBirthday.getTime();
}

function formatMsWithSeparators(ms: number): string {
  return ms.toLocaleString("en-US");
}

export function AgeCounter() {
  const [years, setYears] = useState<number>(0);
  const [ms, setMs] = useState<number>(0);
  const [mounted, setMounted] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);

    const tick = () => {
      const now = new Date();
      const lastBirthday = getLastBirthday(now);
      setYears(getCompletedYears(lastBirthday));
      setMs(getMsSinceLastBirthday(lastBirthday));
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="age-counter">
        <span className="age-placeholder">—</span>
      </div>
    );
  }

  return (
    <div className="age-counter" role="timer" aria-live="polite">
      <span className="age-years">{years}.</span>
      <span className="age-ms">{formatMsWithSeparators(ms)}</span>
    </div>
  );
}
