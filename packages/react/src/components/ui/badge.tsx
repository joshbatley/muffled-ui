import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
      },
      position: {
        N: 'top-0 right-1/2 translate-x-1/2 -translate-y-1/2 absolute w-fit z-9999 empty:p-1.5 empty:w-1 empty:h-1',
        NE: 'top-0 right-0 translate-x-1/2 -translate-y-1/2 absolute w-fit z-9999 empty:p-1.5 empty:w-1 empty:h-1',
        E: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2 absolute w-fit z-9999 empty:p-1.5 empty:w-1 empty:h-1',
        NW: 'top-0 left-0 -translate-x-1/2 translate-y-1/2 absolute w-fit z-9999 empty:p-1.5 empty:w-1 empty:h-1',
        SE: 'bottom-0 right-0 translate-x-1/2 translate-y-1/2 absolute w-fit z-9999 empty:p-1.5 empty:w-1 empty:h-1',
        S: 'left-1/2 top-1/2 -translate-x-1/2 translate-y-1/2 absolute w-fit z-9999 empty:p-1.5 empty:w-1 empty:h-1',
        SW: 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2 absolute w-fit z-9999 empty:p-1.5 empty:w-1 empty:h-1',
        W: 'left-0 top-0 -translate-x-1/2 translate-y-1/2 absolute w-fit z-9999 empty:p-1.5 empty:w-1 empty:h-1',
        None: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      position: 'None',
    },
  },
)

const t = () => (
  <div className="z-9999  empty:p-1.5" />
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { tag?: string | boolean }

function Badge({ className, tag, variant, position, children, ...props }: BadgeProps) {
  if (tag) {
    return (
      <div className="inline-block relative w-full">
        <div className={cn(badgeVariants({ variant, position }), className)} {...props}>
          {tag}
        </div>
        {children}
      </div>
    )
  }

  return (
    <div className={cn(badgeVariants({ variant }), className)} children={children} {...props} />
  )
}

export { Badge, badgeVariants }
