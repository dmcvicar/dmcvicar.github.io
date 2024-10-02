import Image from "next/image";
import type { Content } from "./types";
import "./globals.css";

interface AboutProps {
  content: Content;
}

export default function About({ content }: AboutProps) {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-md">
        <div className="flex flex-col items-center">
          <Image
            className="object-contain p-4"
            src="/images/dave.png"
            width={500}
            height={500}
            alt="Dave"
          />
          <div className="p-6">
            <div className="flex items-baseline text-center">
              <p>{content.about}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
