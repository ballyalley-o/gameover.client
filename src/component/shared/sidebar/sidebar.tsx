import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { NavSidebarButton } from 'component/shared'
import { transl, type LocaleKey } from 'utility'

type SidebarLabelType = { id: string, labelKey: LocaleKey, to: string, icon?: React.ReactNode }

interface SidebarSectionProps {
  labelKey: LocaleKey
  items   : SidebarLabelType[]
}

export const SidebarButton = ({ children, open, setOpen }: { children: React.ReactNode, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <button onClick={() => setOpen(!open)} className={"w-full flex items-center justify-between text-md text-muted-foreground hover:text-foreground transition-colors"}>
            <span className={"tracking-widest uppercase"}>{children}</span>
            {open ? <ChevronDown className={"w-5 h-5 text-yellow-400"} /> : <ChevronRight className={"w-5 h-5"} />}
        </button>
    )
}

const Sidebar = ({ labelKey, items }: SidebarSectionProps) => {
    const [open, setOpen] = useState<boolean>(true)
    return (
        <div>
        <SidebarButton open={open} setOpen={setOpen}>
            {transl(labelKey)}
        </SidebarButton>
        {open && (
            <div className={'sidebar-items-wrapper'}>
                {items.map((_item) => (
                    <NavSidebarButton item={_item} />
                ))}
            </div>
        )}
        </div>
    )
}

export default Sidebar
