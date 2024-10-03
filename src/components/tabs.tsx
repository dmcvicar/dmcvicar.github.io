'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabsProps {
    home_title: string
    experience_title: string
    projects_title: string
}

interface TabProps {
    title: string
    href?: string
    active?: boolean
}

function Tab(props: TabProps) {
    let color = " text-slate-600"
    if (props.active) {
        color = " text-blue-600"
    }
    if (props.href === undefined || props.href === null) {
        color = " text-gray-400"
    }
    const activeClasses = " border-b-2"
    const unactiveClasses = " hover:border-b-2 hover:border-slate-600"
    const enabledClasses = " border-blue-600"
    const disabledClasses = " cursor-not-allowed"
    const classes = "-mb-0.5 inline-block p-3 rounded-t-lg" + (props.active ? activeClasses : unactiveClasses) + (props.href ? enabledClasses : disabledClasses) + color
    return (
        <li className="me-2">
            { props.href ? <Link href={props.href} aria-current="page" className={classes}>{props.title}</Link> : <div className={classes}>{props.title}</div> }
        </li>
    )
}

export default function Tabs(props: TabsProps) {
    const pathname = usePathname()
    return (
        <ul className="flex flex-wrap text-lg font-light text-center border-b-2 border-gray-200 pl-1">
            <Tab href="/" title={props.home_title} active={pathname === "/"}/>
            <Tab href="/experience" title={props.experience_title} active={pathname === "/experience"}/>
            {/* <Tab href="/projects" title={props.projects_title} active={pathname === "/projects"}/> */}
            <Tab title={props.projects_title} active={pathname === "/projects"}/>
        </ul>
    )
}