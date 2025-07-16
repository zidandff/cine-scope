import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function FavoriteCard({
  title,
  categories,
  imagePath,
  slug,
}: {
  title: string;
  categories: string;
  imagePath: string;
  slug: string;
}) {
  return (
    <div>
      <Link href={`/favorites/${slug}`}>
        <Image
          className="rounded-md"
          src={imagePath}
          alt={`${title} movie poster`}
          width={236}
          height={351}
        />
        <div>
          <div>
            <h2 className="text-lg font-medium">{title}</h2>
          </div>
          <p className="text-sm font-light">{categories}</p>
        </div>
      </Link>
    </div>
  );
}
