import { type ReactNode } from 'react'

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div>{children}</div>
  )
}

export default AppProvider