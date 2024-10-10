import { ReactNode } from "react";

interface ServiceInfoProps {
  children: ReactNode
  title: string
  href: string
}

function ServiceInfo({ children, title, href }: ServiceInfoProps) {
  return (
    <a className="flex flex-col border-slate border-2 shadow-lg md:w-1/4 w-full" href={href}>
      <text className="font-bold text-center text-3xl border-b-2 py-3 mx-4">{title}</text>
      <div className="px-4 py-4">
        {children}
      </div>
    </a>
  )
}

export default function Page() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      <ServiceInfo title="Custom Websites" href="/services/websites">
        <text className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</text>
      </ServiceInfo>
      <ServiceInfo title="AI/LLM Apps" href="/services/mlops">
        <text className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</text>
      </ServiceInfo>
      <ServiceInfo title="Consulting Services" href="/services/consulting">
        <text className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</text>
      </ServiceInfo>
    </div>
  )
}
