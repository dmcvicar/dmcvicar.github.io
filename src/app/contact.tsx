import { Content, ContactSite } from "./types";
import { ReactNode } from "react";
import "./globals.css";

const GITHUB_SVG =
  "M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z";

interface ContactProps {
  content: Content;
}

interface ContactIconProps {
  icon?: ReactNode;
  icon_svgs: Array<string>;
  marginRight?: boolean;
  marginLeft?: boolean;
  color?: string;
  viewBox?: string;
}

interface ContactInfoProps {
  site_info: ContactSite;
}

function ContactInfo({ site_info }: ContactInfoProps) {
  return (
    <a
      className="flex items-center hover:underline"
      key={site_info.text}
      href={site_info.uri}
    >
      <ContactIcon
        marginRight
        icon_svgs={site_info.icon_svgs}
        color={site_info.icon_color}
        viewBox={site_info.viewBox}
      />
      {site_info.text}
    </a>
  );
}

const ContactIcon = ({
  icon_svgs,
  marginRight,
  marginLeft,
  color,
  viewBox = "0 0 24 24",
}: ContactIconProps) => {
  const mr = marginRight ? "mr-2" : "mr-0";
  const ml = marginLeft ? "ml-2" : "ml-0";
  const className = "size-5 " + mr + " " + ml;
  return (
    <svg className={className} viewBox={viewBox}>
      {icon_svgs.map((path: string, index: number) => (
        <path key={index} fill={color ? color : "white"} d={path} />
      ))}
    </svg>
  );
};

export default function Contact({ content }: ContactProps) {
  return (
    <div className="wrap flex flex-wrap items-center justify-between gap-6 bg-slate-500 px-28 py-12 text-white">
      <a href="https://github.com/dmcvicar/dmcvicar.github.io">
        <button className="flex h-10 items-center rounded-md border-solid bg-slate-200 p-2 text-black hover:bg-slate-300">
          {content.button_text}
          <ContactIcon icon_svgs={[GITHUB_SVG]} marginLeft color="black" />
        </button>
      </a>
      <div className="flex flex-col pr-28">
        <h3 className="text-2xl font-bold">Contact</h3>
        {content.contact_sites.map((site_info: ContactSite) => {
          return ContactInfo({ site_info });
        })}
      </div>
    </div>
  );
}
