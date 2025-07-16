import { reviews } from "@/src/data/reviews";

export async function GET() {
  return Response.json(reviews);
}

export async function POST(request: Request) {
  const { movieId, rating, review } = await request.json();
  const newReview = {
    id: Date.now(),
    movieId,
    rating,
    review,
  };
  reviews.push(newReview);
  return Response.json(newReview, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const idx = reviews.findIndex((r) => r.id === id);
  if (idx !== -1) {
    reviews.splice(idx, 1);
    return Response.json({ success: true });
  }
  return Response.json({ success: false, error: 'Review not found' }, { status: 404 });
}

export async function PUT(request: Request) {
  const { id, rating, review } = await request.json();
  const idx = reviews.findIndex((r) => r.id === id);
  if (idx !== -1) {
    if (rating !== undefined) reviews[idx].rating = rating;
    if (review !== undefined) reviews[idx].review = review;
    return Response.json(reviews[idx]);
  }
  return Response.json({ error: 'Review not found' }, { status: 404 });
}
