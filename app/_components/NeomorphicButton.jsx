import React from 'react'
import { cn } from '@/lib/utils'

const NeomorphicButton = React.forwardRef(({ 
  className, 
  variant = 'default', 
  size = 'default', 
  children, 
  ...props 
}, ref) => {
  const variants = {
    default: 'neomorphic-btn',
    primary: 'neomorphic-btn-primary',
    secondary: 'neomorphic-btn text-neomorphic-text-light',
    ghost: 'neomorphic-flat hover:neomorphic-small text-neomorphic-text',
    outline: 'neomorphic-inset hover:neomorphic text-neomorphic-text border border-neomorphic-text/20'
  }

  const sizes = {
    default: 'px-6 py-3 text-base',
    sm: 'px-4 py-2 text-sm',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }

  return (
    <button
      className={cn(
        variants[variant],
        sizes[size],
        'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neomorphic-primary/20 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

NeomorphicButton.displayName = 'NeomorphicButton'

export { NeomorphicButton }



