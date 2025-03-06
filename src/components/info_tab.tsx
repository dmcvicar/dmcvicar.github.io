/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";

interface InfoSubtitle {
  text: string;
  bold?: boolean;
}

interface InfoTabItem {
  title: string;
  subtitles: Array<InfoSubtitle>;
  blurbs: Array<string>;
  image?: string;
  image_color?: string;
}

interface InfoTabProps {
  placeholder: string;
  items: Array<InfoTabItem>;
}

function InfoItem(item: InfoTabItem) {
  const subs: Array<ReactNode> = [];
  const _color_mapping: { [key: string]: string } = {
    blacksky_blue: "bg-blacksky-blue",
    white: "bg-white",
  };
  const img_class =
    "object-contain p-5 " +
    (item.image_color ? _color_mapping[item.image_color] : "bg-white");
  item.subtitles.forEach((subtitle) => {
    let _sub = <div>{subtitle.text}</div>;
    if (subtitle.bold) {
      _sub = <h3 className="text-xl font-bold">{_sub}</h3>;
    }
    subs.push(
      <div className="flex" key={subtitle.text}>
        {_sub}
      </div>,
    );
  });
  return (
    <div className="border-slate flex flex-wrap justify-center gap-8 border-2 p-6 shadow-lg">
      <div className="flex max-w-64 flex-col items-start justify-center gap-3">
        {item.image ? (
          <img
            className={img_class}
            src={"/images/" + item.image}
            alt={item.title}
          />
        ) : (
          <div className="flex p-4 border-8 border-slate-300">
            <h2 className="text-6xl text-slate-600">{item.title}</h2>
          </div>
        )}
        <div className="flex flex-col">{subs}</div>
      </div>
      <div className="flex max-w-2xl flex-col">
        <ul className="list-disc">
          {item.blurbs.map((blurb: string) => (
            <li className="text-sm" key={blurb}>
              {blurb}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function InfoTab(props: InfoTabProps) {
  if (props.items.length > 0) {
    return (
      <div className="flex justify-center">
        <div className="flex max-w-5xl flex-col gap-2">
          {props.items.map((item) => (
            <InfoItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    );
  } else {
    return <h1 className="flex justify-center text-xl">{props.placeholder}</h1>;
  }
}
