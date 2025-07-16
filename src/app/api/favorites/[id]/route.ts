import { favorites } from "@/src/data/favorite";

export async function DELETE(
  _: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const movieIndex = favorites.findIndex((fav) => fav.id == Number(params.id));
  favorites.splice(movieIndex, 1);
  console.log(favorites);
  return new Response(null, { status: 204 });
}
