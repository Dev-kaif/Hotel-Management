import { Star, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import axios from "@/api/axios";

const dummyReviews = [
  {
    id: "dummy-1",
    user: "guest-user",
    name: "Emma Thompson",
    rating: 5,
    comment:
      "The atmosphere, service, and food were all exceptional. The chef's tasting menu was a culinary journey I won't soon forget.",
    date: "March 15, 2025",
    profileImage: "https://api.dicebear.com/7.x/initials/svg?seed=Emma Thompson",
  },
  {
    id: "dummy-2",
    user: "guest-user",
    name: "Michael Chen",
    rating: 5,
    comment:
      "Luxe Haven exceeded all expectations. The seafood platter was the freshest I've had in the city.",
    date: "February 28, 2025",
    profileImage: "https://api.dicebear.com/7.x/initials/svg?seed=Michael Chen",
  },
];

const ReviewsPage = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [allReviews, setAllReviews] = useState(dummyReviews);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const [reviewsRes, userRes] = await Promise.all([
          axios.get("/reviews"),
          axios.get("/user"),
        ]);

        const uid = userRes?.data?.id;
        setUserId(uid);

        const reviews = reviewsRes.data.map((r) => ({
          id: r._id,
          name: r.name,
          rating: r.rating,
          comment: r.comment,
          user: r.user,
          date: new Date(r.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          profileImage: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
            r.name
          )}`,
        }));

        setAllReviews([...reviews, ...dummyReviews]);
      } catch (err) {
        console.error("Failed to fetch reviews", err);
      }
    };
    fetchReviews();
  }, []);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.get("/user");
      const fetchedName = res.data?.name || "Anonymous";
      const userId = res.data?._id;
      setUserId(userId);

      const newReview = {
        rating,
        comment,
      };

      const postRes = await axios.post("/reviews", newReview);

      const addedReview = {
        id: postRes.data._id,
        name: fetchedName,
        rating: postRes.data.rating,
        comment: postRes.data.comment,
        user: userId,
        date: new Date(postRes.data.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        profileImage: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
          fetchedName
        )}`,
      };

      setAllReviews((prev) => [addedReview, ...prev]);
      setComment("");
      setRating(5);
      setHoverRating(0);
      setOpen(false);
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/reviews/${id}`);
      setAllReviews((prev) => prev.filter((rev) => rev.id !== id));
    } catch (err) {
      console.error("Failed to delete review", err);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative px-4 py-24"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center text-white">
            Guest Reviews
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {allReviews.map((review) => (
              <Card
                key={review.id}
                className="p-6 bg-background/60 backdrop-blur-md shadow-md rounded-xl relative"
              >
                {review.user === userId && (
                  <button
                    className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(review.id)}
                    title="Delete your review"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={review.profileImage}
                    alt={review.name}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{review.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < review.rating
                          ? "fill-gold text-gold"
                          : "text-muted-foreground"
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-white leading-relaxed">
                  {review.comment}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Share Your Experience
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We value your feedback! Leave a review about your dining
              experience at Luxe Haven.
            </p>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gold text-black hover:bg-gold/90">
                  Write a Review
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-background p-6 rounded-lg max-w-lg mx-auto">
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Leave a Review
                </h2>
                <form className="space-y-4" onSubmit={handleReviewSubmit}>
                  <div>
                    <label className="block text-sm text-white mb-1">
                      Rating
                    </label>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((starValue) => (
                        <div
                          key={starValue}
                          title={`${starValue} star${starValue > 1 ? "s" : ""}`}
                          className="cursor-pointer"
                        >
                          <Star
                            size={28}
                            className={`transition-transform duration-150 hover:scale-110 ${
                              (hoverRating || rating) >= starValue
                                ? "fill-gold text-gold"
                                : "text-muted-foreground"
                            }`}
                            onClick={() => setRating(starValue)}
                            onMouseEnter={() => setHoverRating(starValue)}
                            onMouseLeave={() => setHoverRating(0)}
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {rating} out of 5
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm text-white mb-1">
                      Comment
                    </label>
                    <textarea
                      rows={4}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full p-3 rounded bg-background border border-muted text-white"
                      placeholder="Share your experience..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-gold text-black w-full"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Review"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
