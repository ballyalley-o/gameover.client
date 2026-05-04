import React from 'react'

type StackProps = {
    children : React.ReactNode
    gap     ?: AppValueScale
}

const Stack = ({ children, gap = 'md' }: StackProps) => {
  return <div style={{ gap: `var(--spacing-${gap})` }} className={'flex flex-col'}>{children}</div>
}

export default Stack