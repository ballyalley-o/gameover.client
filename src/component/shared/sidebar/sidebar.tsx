import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { transl, type LocaleKey } from 'utility'

interface SidebarSectionProps {
    labelKey: LocaleKey
    items   : { id: string, labelKey: LocaleKey }[]
}

const SidebarButton = ({ children, open, setOpen }: { children: React.ReactNode, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

    return (
        <button onClick={() => setOpen(!open)} className={"w-full flex items-center justify-between text-md text-muted-foreground hover:text-foreground transition-colors"}>
            <span className={"font-medium tracking-widest uppercase text-md"}>{children}</span>
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
            <div className={'pb-2'}>
                {items.map((_item) => (
                    <button key={_item.id} className={"w-full text-left px-6 py-1 text-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"}>{transl(_item.labelKey)}</button>
                ))}
            </div>
        )}
        </div>
    )
}

export default Sidebar
