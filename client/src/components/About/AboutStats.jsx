import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

function StatCounter({ target, suffix = '', duration = 1200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function AboutStats({ stats = [] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-left"
        >
          <div className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight text-cyan-400">
            <StatCounter target={stat.value} suffix={stat.suffix} />
          </div>
          <div className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
