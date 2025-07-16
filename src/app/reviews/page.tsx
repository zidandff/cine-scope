"use client";

import { useState, useEffect } from "react";
import { movies } from "@/src/data/movies";
import { Movie } from "@/src/data/movies";
import { Review } from "@/src/data/reviews";
import { Button } from "@/src/components/ui/button";

type ReviewMerge = Movie & Review;

export default function Reviews() {
  const [reviews, setReviews] = useState<ReviewMerge[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editReviewId, setEditReviewId] = useState<number | null>(null);

  const fetchData = async () => {
    const res = await fetch("/api/reviews");
    const data = await res.json();
    const moviesMerge = data.map((review: any) => {
      const movieMatch = movies.find((movie) => review.movieId == movie.id);
      if (movieMatch) {
        return { ...movieMatch, ...review };
      }
    });
    setReviews(moviesMerge);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddReview = () => {
    setModalOpen(true);
    setSelectedMovieId(null);
    setRating(0);
    setReviewText("");
    setEditMode(false);
    setEditReviewId(null);
  };

  const handleEdit = (review: ReviewMerge) => {
    setEditMode(true);
    setEditReviewId(review.id);
    setSelectedMovieId(review.movieId);
    setRating(review.rating);
    setReviewText(review.review);
    setModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    await fetch("/api/reviews", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchData();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMovieId) return;
    if (editMode && editReviewId !== null) {
      await fetch("/api/reviews", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editReviewId,
          rating,
          review: reviewText,
        }),
      });
    } else {
      await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          movieId: selectedMovieId,
          rating,
          review: reviewText,
        }),
      });
    }
    setModalOpen(false);
    setEditMode(false);
    setEditReviewId(null);
    fetchData();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h2 className="text-2xl">Reviews</h2>
        <Button onClick={handleAddReview}>Add review</Button>
      </div>
      <hr className="border-gray-400 mt-4 gap-2" />
      <div className="mt-4 flex 3 flex-wrap">
        {reviews.map((review) => (
          <div className="w-1/2 p-2">
            <div
              className="flex bg-indigo-950 rounded-lg p-2 "
              key={review.id + "-" + review.review}
            >
              <img
                className="w-[100px] rounded-md mr-2"
                src={review.imagePath}
                alt={review.title}
              />
              <div>
                <div>{review.rating}</div>
                <h2>{review.title}</h2>
                <p>{review.review}</p>
                <div className="flex gap-2 mt-2">
                  <Button onClick={() => handleEdit(review)}>Edit</Button>
                  <Button onClick={() => handleDelete(review.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#1A112E] p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl mb-4">
              {editMode ? "Edit Review" : "Add Review"}
            </h2>
            {!selectedMovieId ? (
              <div>
                <label className="block mb-2">Choose Movie</label>
                <select
                  className="w-full p-2 border rounded mb-4 bg-indigo-950"
                  value={selectedMovieId ?? ""}
                  onChange={(e) => setSelectedMovieId(Number(e.target.value))}
                  disabled={editMode}
                >
                  <option value="" disabled>
                    -- Select a movie --
                  </option>
                  {movies.map((movie) => (
                    <option key={movie.id} value={movie.id}>
                      {movie.title}
                    </option>
                  ))}
                </select>
                <Button onClick={() => setModalOpen(false)}>Cancel</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block mb-2">Rating</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    className="w-full p-2 border rounded bg-indigo-950"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Review</label>
                  <textarea
                    className="w-full p-2 border rounded bg-indigo-950"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit">
                    {editMode ? "Update" : "Submit"}
                  </Button>
                  <Button type="button" onClick={() => setModalOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
