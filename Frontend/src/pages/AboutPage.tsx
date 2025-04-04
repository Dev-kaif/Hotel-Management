import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative px-4 py-24"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1556742205-e10c9486e506?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center text-white">
            About Luxe Haven
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-12 rounded-full" />

          <Card className="p-6 mb-8 bg-background/60 backdrop-blur-md shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Founded in 2015, Luxe Haven began with a simple vision: to create
              an extraordinary dining experience that combines culinary
              excellence with unparalleled ambiance. What started as a small
              bistro has evolved into one of the most sought-after dining
              destinations in the city.
            </p>
            <p className="text-muted-foreground">
              Our founder, Chef Alexandra Laurent, brings over 20 years of
              experience from Michelin-starred restaurants across Europe. Her
              passion for innovative cuisine and dedication to sourcing the
              finest ingredients remains at the heart of everything we do.
            </p>
          </Card>

          <Card className="p-6 mb-8 bg-background/60 backdrop-blur-md shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Our Philosophy</h2>
            <p className="mb-4 text-muted-foreground">
              At Luxe Haven, we believe that dining is more than just a
              meal—it's an art form and a social experience that brings people
              together. Every dish tells a story, every ingredient has been
              carefully selected, and every presentation has been thoughtfully
              designed.
            </p>
            <p className="text-muted-foreground">
              We are committed to sustainability and supporting local producers.
              Our menu changes seasonally to showcase the best ingredients at
              their peak, and we work closely with farmers, fishermen, and
              artisanal producers who share our values.
            </p>
          </Card>

          <Card className="p-6 mb-8 bg-background/60 backdrop-blur-md shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Our Team</h2>
            <p className="mb-4 text-muted-foreground">
              Behind every exceptional dining experience is our dedicated team
              of professionals who are passionate about hospitality. From our
              talented chefs who craft each dish with precision to our attentive
              service staff who ensure your comfort, everyone at Luxe Haven is
              committed to exceeding your expectations.
            </p>
            <p className="text-muted-foreground">
              We foster a culture of creativity, collaboration, and continuous
              learning, enabling us to evolve and innovate while maintaining the
              highest standards of quality and service.
            </p>
          </Card>

          <div className="text-center mt-12">
            <Button className="bg-gold text-black hover:bg-gold/90" size="lg">
              Book a Table
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
