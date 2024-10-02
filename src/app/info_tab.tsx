/* eslint-disable @next/next/no-img-element */
import type { InfoTabContent, InfoTabItem } from "./types";
import { ReactNode } from "react";

interface InfoTabProps {
  content: InfoTabContent;
}

interface InfoItemProps {
  item_content: InfoTabItem;
}

function InfoItem({ item_content }: InfoItemProps) {
  const subs: Array<ReactNode> = [];
  const _color_mapping: { [key: string]: string } = {
    blacksky_blue: "bg-blacksky-blue",
    white: "bg-white",
  };
  const img_class =
    "object-contain p-5 " +
    (item_content.image_color
      ? _color_mapping[item_content.image_color]
      : "bg-white");
  item_content.subtitles.forEach((subtitle) => {
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
        {item_content.image ? (
          <img
            className={img_class}
            src={"/images/" + item_content.image}
            alt={item_content.title}
          />
        ) : (
          <div className="flex">
            <h2 className="text-xl">{item_content.title}</h2>
          </div>
        )}
        <div className="flex flex-col">{subs}</div>
      </div>
      <div className="flex max-w-2xl flex-col">
        <ul className="list-disc">
          {item_content.blurbs.map((blurb: string) => (
            <li className="text-sm" key={blurb}>
              {blurb}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function InfoTab({ content }: InfoTabProps) {
  if (content.items.length > 0) {
    return (
      <div className="flex justify-center">
        <div className="flex max-w-5xl flex-col gap-2">
          {content.items.map((item) => (
            <InfoItem key={item.title} item_content={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return <h1 className="text-xl">{content.title} Page in Progress</h1>;
  }
}
