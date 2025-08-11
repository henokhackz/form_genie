import React from 'react'
import { cn } from '@/lib/utils'

const NeomorphicCard = React.forwardRef(({ 
  className, 
  variant = 'default',
  hover = true,
  children, 
  ...props 
}, ref) => {
  const variants = {
    default: 'neomorphic-card',
    flat: 'neomorphic-flat p-6',
    inset: 'neomorphic-inset p-6',
    large: 'neomorphic-large p-8'
  }

  return (
    <div
      className={cn(
        variants[variant],
        hover && 'cursor-pointer',
        'transition-all duration-300',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})

NeomorphicCard.displayName = 'NeomorphicCard'

export { NeomorphicCard }



