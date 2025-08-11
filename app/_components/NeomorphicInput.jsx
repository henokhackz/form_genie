import React from 'react'
import { cn } from '@/lib/utils'

const NeomorphicInput = React.forwardRef(({ 
  className, 
  type = 'text',
  label,
  error,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-neomorphic-text mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        className={cn(
          'neomorphic-input w-full text-neomorphic-text placeholder:text-neomorphic-text-muted',
          'focus:shadow-neomorphic-inset focus:ring-2 focus:ring-neomorphic-primary/20',
          error && 'ring-2 ring-red-500/20 focus:ring-red-500/20',
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  )
})

NeomorphicInput.displayName = 'NeomorphicInput'

const NeomorphicTextarea = React.forwardRef(({ 
  className, 
  label,
  error,
  rows = 4,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-neomorphic-text mb-2">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={cn(
          'neomorphic-input w-full text-neomorphic-text placeholder:text-neomorphic-text-muted resize-none',
          'focus:shadow-neomorphic-inset focus:ring-2 focus:ring-neomorphic-primary/20',
          error && 'ring-2 ring-red-500/20 focus:ring-red-500/20',
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  )
})

NeomorphicTextarea.displayName = 'NeomorphicTextarea'

export { NeomorphicInput, NeomorphicTextarea }



