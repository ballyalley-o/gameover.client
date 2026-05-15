import type { ReactNode } from 'react'
import { cn } from 'utility'

const Card = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <section className={cn('card', className)}>{children}</section>
  )
}

export default Card
