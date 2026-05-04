import { type ReactNode } from 'react'
import { cn } from 'utility'

const BarWrapper = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={cn('max-w-400 mx-auto flex items-center justify-center md:justify-between', className)}>{children}</div>
  )
}

export default BarWrapper