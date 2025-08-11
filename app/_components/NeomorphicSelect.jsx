import React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

const NeomorphicSelect = React.forwardRef(({ 
  className, 
  children,
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
      <div className="relative">
        <select
          className={cn(
            'neomorphic-input w-full text-neomorphic-text appearance-none pr-10',
            'focus:shadow-neomorphic-inset focus:ring-2 focus:ring-neomorphic-primary/20',
            error && 'ring-2 ring-red-500/20 focus:ring-red-500/20',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neomorphic-text-muted pointer-events-none" />
      </div>
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  )
})

NeomorphicSelect.displayName = 'NeomorphicSelect'

export { NeomorphicSelect }



