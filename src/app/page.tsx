/* eslint-disable @next/next/no-img-element */
// app/page.tsx
"use client";

import page_content from "../../public/content/page.json"

export default function Page() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-screen-md">
          <div className="flex flex-col items-center">
            <img
              className="object-contain p-4 max-w-xl"
              src="/images/dave.png"
              alt="Dave"
            />
            <div className="p-6">
              <div className="flex items-baseline text-center">
                <p>{page_content.about}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
