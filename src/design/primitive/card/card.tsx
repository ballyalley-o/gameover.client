import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={'bg-gray-200 border border-gray-200 rounded-lg shadow-sm'} style={{ padding: `var(--spacing-md)` }}>{children}</div>
  )
}

export default Card