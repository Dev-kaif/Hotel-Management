import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Star, Quote } from "lucide-react";
import Section from "@/components/Section";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${"https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=3289&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nutritious and Delicious Food Selections
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Luxury dining at its finest. From gourmet dishes to comfortable
              ambiance, our hotel restaurant delivers exceptional culinary
              experiences every time.
            </p>
            <Link to="/booking">
              <Button className="bg-gold hover:bg-gold-dark text-black text-lg px-8 py-6">
                Book a Table
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <Section id="about" className="bg-black">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 fancy-border pb-2">
              Our Story
            </h2>
            <p className="text-gray-300 mb-4">
              Founded in 2005, Luxe Haven started as a boutique hotel with a
              vision to redefine luxury hospitality. Our journey began with a
              passion for creating memorable experiences through exceptional
              service and culinary excellence.
            </p>
            <p className="text-gray-300 mb-6">
              Today, we are proud to be recognized as one of the premier luxury
              hotels, combining timeless elegance with modern sophistication.
              Our restaurant has earned accolades for its innovative cuisine
              that blends traditional flavors with contemporary techniques.
            </p>
            <Link to="/about">
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-black group"
              >
                Discover More
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Luxe Haven Restaurant"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Featured Menu Items */}
      <Section
        id="featured-menu"
        className="bg-gradient-to-b from-black to-background"
      >
        <h2 className="section-heading fancy-border pb-2">
          Explore Our Latest Food Offerings
        </h2>
        <p className="section-subheading">
          Sample our exquisite selection of dishes prepared with the finest
          ingredients and culinary expertise.
        </p>

        <div className="mt-12">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-8"
            >
              <div className="rounded-full overflow-hidden flex-shrink-0 w-32 h-32 border-2 border-gold">
                <img
                  src="https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Stir-Fried Rice with Meat and Veggies"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Stir-Fried Rice with Meat and Veggies
                </h3>
                <p className="text-gray-400 mb-3">
                  Savory fried rice with tender meat and fresh seasonal
                  vegetables, seasoned to perfection.
                </p>
                <p className="text-gold text-xl font-bold">$23</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-8"
            >
              <div className="rounded-full overflow-hidden flex-shrink-0 w-32 h-32 border-2 border-gold">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Grilled Salmon with Herb Sauce"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Grilled Salmon with Herb Sauce
                </h3>
                <p className="text-gray-400 mb-3">
                  Fresh Atlantic salmon, grilled to perfection and topped with
                  our signature herb sauce.
                </p>
                <p className="text-gold text-xl font-bold">$29</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Link to="/menu">
              <Button className="bg-gold hover:bg-gold-dark text-black">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Menu Preview Section */}
      <Section id="menu-preview" className="bg-background">
        <h2 className="section-heading fancy-border pb-2">Select Our Menu</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="menu-card bg-gradient-to-br from-card to-black p-4 rounded-lg border border-muted flex flex-col"
            >
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-44 object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1 line-clamp-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-400 mb-3 flex-grow line-clamp-2">
                {item.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gold font-bold">${item.price}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gold hover:bg-muted p-1 rounded-full"
                >
                  <span className="sr-only">Add to cart</span>+
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/menu">
            <Button className="bg-gold hover:bg-gold-dark text-black">
              See All
            </Button>
          </Link>
        </div>
      </Section>

      {/* Services Section */}
      {/* Services Section */}
      <Section
        id="services"
        className="bg-black bg-[url('/your-image-path.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <h2 className="section-heading fancy-border pb-2 text-white">
          We Provide a Service That Will Exceed Your Expectations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Non-clickable button-style div */}
              <div className="rounded-md border border-gold text-gold hover:bg-gold hover:text-black w-full py-6 cursor-default transition-all duration-300">
                {service.name}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Dish */}
      <Section
        id="featured-dish"
        className="bg-gradient-to-b from-background to-black"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Whole Grain Bread with Avocado Dressing"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Whole Grain Bread with Avocado Dressing
            </h2>
            <p className="text-gray-300 mb-6">
              Our signature avocado toast combines freshly baked whole grain
              bread with creamy avocado, cherry tomatoes, microgreens, and a
              drizzle of olive oil. A perfect balance of nutrition and flavor
              for a satisfying meal any time of day.
            </p>
            <Link to="/menu">
              <Button className="bg-gold hover:bg-gold-dark text-black">
                Order Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" className="bg-black">
        <h2 className="section-heading fancy-border pb-2">
          Hear from Our Customers
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg border border-muted relative"
            >
              <Quote
                className="text-gold opacity-20 absolute top-6 right-6"
                size={40}
              />
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < testimonial.rating
                            ? "text-gold fill-gold"
                            : "text-gray-500"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">"{testimonial.comment}"</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        className="bg-gradient-to-b from-black to-background"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 fancy-border pb-2">
              Get in Touch
            </h2>
            <p className="text-gray-300 mb-8">
              Have questions or want to make a special reservation? Reach out to
              us and our team will be delighted to assist you with any
              inquiries.
            </p>

            <Link to="/contact">
              <Button className="bg-gold hover:bg-gold-dark text-black">
                Contact Us
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card p-6 rounded-lg border border-muted"
          >
            <h3 className="text-2xl font-semibold mb-4">Send us an email</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-muted border border-input rounded-md px-3 py-2"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-muted border border-input rounded-md px-3 py-2"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-muted border border-input rounded-md px-3 py-2"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-muted border border-input rounded-md px-3 py-2"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-black"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

// Sample data
const menuItems = [
  {
    id: 1,
    name: "Medium Beef and Chili Bowl",
    description:
      "Slow-cooked beef with beans, topped with sour cream and chives",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: 2,
    name: "Creamy Seafood Rice Bowl",
    description: "Arborio rice cooked with seafood medley and cream",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: 3,
    name: "Szechuan Wok Mix Bowl",
    description: "Spicy wok-fried vegetables and meat with Szechuan sauce",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: 4,
    name: "Pesto Pasta with Grilled Chicken",
    description: "Al dente pasta with homemade basil pesto and grilled chicken",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
];

const services = [
  { id: 1, name: "Table for 4", link: "/booking" },
  { id: 2, name: "24/7 Service", link: "/services" },
  { id: 3, name: "Special Deal", link: "/promotions" },
  { id: 4, name: "Contact Us", link: "/contact" },
];

const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    comment:
      "The food was exceptional and the service impeccable. The atmosphere was perfect for our anniversary dinner.",
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment:
      "Absolutely loved the seafood platter. Fresh ingredients and beautiful presentation. Will definitely return!",
  },
  {
    id: 3,
    name: "David Chen",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4,
    comment:
      "Great ambiance and excellent food. The wine selection was impressive. Highly recommend the chef's special.",
  },
];

export default HomePage;
