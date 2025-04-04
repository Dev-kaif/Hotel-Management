
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Emma Thompson",
    rating: 5,
    date: "March 15, 2025",
    comment: "The atmosphere, service, and food were all exceptional. The chef's tasting menu was a culinary journey I won't soon forget. Each dish was meticulously prepared and presented. Will definitely be returning!"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    date: "February 28, 2025",
    comment: "Luxe Haven exceeded all expectations. The sommelier recommended perfect wine pairings for our meal. The seafood platter was the freshest I've had in the city. Impeccable service from start to finish."
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    rating: 4,
    date: "February 10, 2025",
    comment: "Beautiful ambiance and excellent food. The truffle risotto was divine! Service was attentive without being intrusive. Only giving 4 stars because the dessert menu could use a bit more variety."
  },
  {
    id: 4,
    name: "James Wilson",
    rating: 5,
    date: "January 22, 2025",
    comment: "Celebrated our anniversary here and couldn't have chosen a better place. They made the evening special with complimentary champagne and a personalized dessert. The steak was cooked to perfection!"
  },
  {
    id: 5,
    name: "Olivia Park",
    rating: 5,
    date: "January 5, 2025",
    comment: "This restaurant deserves all the praise it receives. The seasonal menu showcases local ingredients beautifully. The lobster bisque was heavenly, and the staff's knowledge about each dish was impressive."
  },
  {
    id: 6,
    name: "Daniel Brown",
    rating: 4,
    date: "December 18, 2024",
    comment: "Great dining experience with exceptional attention to detail. The duck confit was outstanding. Slightly noisy on the weekend, but that's to be expected given its popularity. Would recommend for special occasions."
  }
];

const ReviewsPage = () => {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Guest Reviews</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 bg-card/50 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{review.name}</h3>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? "fill-gold text-gold" : "text-muted-foreground"}
                  />
                ))}
              </div>
              <p className="text-sm">{review.comment}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-semibold">Share Your Experience</h2>
          <p className="text-muted-foreground">
            We value your feedback! Leave a review about your dining experience at Luxe Haven.
          </p>
          <Button className="bg-gold text-black hover:bg-gold/90">
            Write a Review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
