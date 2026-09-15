import React from 'react';
import { motion } from 'motion/react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  disabled = false,
  download = false,
  target,
  rel
}) {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-medium gap-1.5',
    md: 'px-5 py-2.5 text-sm font-medium gap-2',
    lg: 'px-6 py-3 text-base font-medium gap-2.5'
  }[size] || 'px-5 py-2.5 text-sm font-medium gap-2';

  const variantClasses = {
    primary: 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm hover:shadow active:bg-cyan-700 border border-cyan-500/30',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 border border-slate-700/80 light:bg-slate-100 light:text-slate-800 light:border-slate-300',
    outline: 'border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 bg-transparent dark:text-slate-300 dark:hover:text-cyan-300 light:border-slate-300 light:text-slate-700 light:hover:text-cyan-600',
    ghost: 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-100'
  }[variant] || '';

  const baseClasses = `inline-flex items-center justify-center rounded-lg transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`group ${baseClasses}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        download={download}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${baseClasses}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
}
