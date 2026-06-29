"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const current = images[active] || images[0];

  return (
    <div className="grid gap-3">
      <div className="relative aspect-[4/3] border border-zinc-200 bg-zinc-50">
        <Image src={current} alt={alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-6" />
      </div>
      {images.length > 1 ? (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActive(index)}
              className={`relative aspect-square border bg-zinc-50 ${index === active ? "border-red-700" : "border-zinc-200"}`}
            >
              <Image src={image} alt={`${alt} ${index + 1}`} fill sizes="120px" className="object-contain p-2" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
