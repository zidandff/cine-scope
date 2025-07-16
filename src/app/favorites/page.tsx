"use client";

import { useEffect, useState } from "react";
import { Favorite } from "@/src/data/favorite";
import { Movie } from "@/src/data/movies";
import { movies } from "@/src/data/movies";
import Image from "next/image";

type FavoriteMerge = Movie & Favorite;

export default function Favorites() {
  const [favorites, setFavorites] = useState<FavoriteMerge[]>([]);

  const fetchData = async () => {
    const res = await fetch("/api/favorites");
    const data = await res.json();
    console.log(data);
    const moviesMerge = data.map((fav) => {
      const movieMatch = movies.find((movie) => fav.movieId == movie.id);
      if (movieMatch) {
        return { ...movieMatch, ...fav };
      }
    });
    setFavorites(moviesMerge);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function handleRemoveFav(id: number) {
    await fetch(`/api/favorites/${id}`, { method: "DELETE" });
    fetchData();
  }

  return (
    <div className="p-6 ">
      <h2 className="text-xl mb-2">My favorite</h2>
      <hr className="border-gray-400" />
      <div className="mt-5 flex gap-4">
        {favorites.map((fav) => (
          <div key={fav.id}>
            <Image
              className="rounded-md"
              src={fav.imagePath}
              alt={`${fav.title} movie poster`}
              width={236}
              height={351}
            />
            <div>
              <h2 className="text-lg font-medium">{fav.title}</h2>
              <p className="text-sm font-light">{fav.categories}</p>
            </div>
            <button
              onClick={() => handleRemoveFav(fav.id)}
              className="border border-red-600 px-4 py-2"
            >
              Remove from favorite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
