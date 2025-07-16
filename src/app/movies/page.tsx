"use client";

import MovieCard from "@/src/components/movies/movie-card";
import { movies } from "@/src/data/movies";
import { Favorite } from "@/src/data/favorite";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";

export default function Page() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const fetchFavorites = async () => {
    const res = await fetch("/api/favorites");
    const data = await res.json();
    setFavorites(data);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleAddFavorite = async (id: number) => {
    const res = await fetch("/api/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ movieId: id }),
    });

    if (res.ok) {
      fetchFavorites();
    }
  };

  return (
    <section className="p-6">
      <div className="flex justify-between items-center">
        <div className="flex">
          <p className="mr-4">Category:</p>
          <ul className="flex gap-3">
            <li className="py-1 px-2 rounded-full border-gray-400 border text-sm text-gray-200">
              Action
            </li>
            <li className="py-1 px-2 rounded-full border-gray-400 border text-sm text-gray-200">
              Adventure
            </li>
            <li className="py-1 px-2 rounded-full border-gray-400 border text-sm text-gray-200">
              Comedy
            </li>
            <li className="py-1 px-2 rounded-full border-gray-400 border text-sm text-gray-200">
              Crime
            </li>
          </ul>
        </div>
        <input
          className="bg-indigo-950 border-none rounded-full px-6 w-[350px] placeholder:text-gray-100 text-gray-100"
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="mt-8">
        <h2 className="text-xl mb-2">Popular this week</h2>
        <hr className="border-gray-400" />
        <div className="mt-5 flex gap-4">
          {movies.map((movie) => {
            const isFavorite = favorites.some(
              (fav) => fav.movieId === movie.id
            );
            let movieActions;
            if (isFavorite) {
              movieActions = (
                <button className="flex mt-4 border border-gray-200 px-3 py-2 w-full  rounded-md justify-center">
                  <SolidStarIcon className="w-5" />
                  Added to Favorite
                </button>
              );
            } else {
              movieActions = (
                <button
                  className="flex mt-4 border border-gray-200 px-3 py-2 w-full  rounded-md justify-center"
                  onClick={() => handleAddFavorite(movie.id)}
                >
                  <StarIcon className="w-5" />
                  Add to Favorite
                </button>
              );
            }

            return (
              <MovieCard
                key={movie.id}
                slug={movie.slug}
                title={movie.title}
                categories={movie.categories}
                imagePath={movie.imagePath}
                href={`/movies/${movie.slug}`}
              >
                {movieActions}
              </MovieCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
