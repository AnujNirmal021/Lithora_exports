import * as React from 'react';

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md bg-stone-900 px-4 py-2 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-50/90 dark:focus-visible:ring-stone-800 ${className || ''}`}
    {...props}
  />
));
Button.displayName = 'Button';

export { Button };
