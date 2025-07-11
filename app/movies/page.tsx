import MovieCard from "@/app/ui/movies/movie-card";
import movies from "@/app/movies";

export default function Page() {
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
          {movies.map((movie) => (
            <MovieCard
              key={movie.slug}
              slug={movie.slug}
              title={movie.title}
              categories={movie.categories}
              imagePath={movie.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
