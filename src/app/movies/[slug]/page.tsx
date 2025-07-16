import Image from "next/image";
import { notFound } from "next/navigation";

import { movies } from "@/src/data/movies";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const selectedMovie = movies.find((movie) => movie.slug === slug);
  if (!selectedMovie) {
    notFound();
  }
  return (
    <section className="flex p-6 gap-6 ">
      <div className="w-[350px] aspect-[2/3] relative">
        <Image
          src={selectedMovie?.imagePath || ""}
          alt={`poster movies of ${selectedMovie?.title}`}
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{selectedMovie?.title}</h1>
        <p className="text-gray-300">{selectedMovie?.categories}</p>
        <p className="mt-5 text-gray-300">{selectedMovie?.overview}</p>
      </div>
    </section>
  );
}
