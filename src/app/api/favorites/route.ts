import { favorites } from "@/src/data/favorite";

export async function GET() {
  return Response.json(favorites);
}

export async function POST(request: Request) {
  const { movieId } = await request.json();
  const newFavorite = {
    id: Date.now(),
    movieId,
    rating: 0,
    review: " ",
  };
  favorites.push(newFavorite);
  return Response.json(newFavorite, { status: 201 });
}
