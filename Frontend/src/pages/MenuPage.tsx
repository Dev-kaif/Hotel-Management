
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Section from '@/components/Section';
import { Search } from 'lucide-react';

const categories = [
  "All",
  "Appetizers",
  "Main Courses",
  "Soups",
  "Salads",
  "Desserts",
  "Beverages"
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredItems = menuItems.filter(item => {
    // First filter by category
    if (activeCategory !== "All" && item.category !== activeCategory) {
      return false;
    }
    
    // Then filter by search query
    if (searchQuery) {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             item.description.toLowerCase().includes(searchQuery.toLowerCase());
    }
    
    return true;
  });
  
  return (
    <div className="pt-20">
      <div 
        className="relative h-[300px] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1514516816566-de580c621376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80)`,
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Explore our delicious offerings crafted with premium ingredients and culinary expertise.
            </p>
          </motion.div>
        </div>
      </div>
      
      <Section className="bg-background">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="relative mb-6 md:mb-0 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search our menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-80 bg-muted border border-input rounded-full pl-10 pr-4 py-2"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full ${
                  activeCategory === category ? "bg-gold text-black hover:bg-gold-dark" : "text-foreground hover:text-gold"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="menu-card bg-card rounded-lg overflow-hidden border border-muted shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-gold font-bold">${item.price}</span>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm px-3 py-1 bg-muted rounded-full">{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-2">No items found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </Section>
    </div>
  );
};

const menuItems = [
  {
    id: 1,
    name: "Medium Beef and Chili Bowl",
    description: "Slow-cooked beef with beans, topped with sour cream and chives",
    price: 17,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 2,
    name: "Creamy Seafood Rice Bowl",
    description: "Arborio rice cooked with seafood medley and cream",
    price: 19,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 3,
    name: "Szechuan Wok Mix Bowl",
    description: "Spicy wok-fried vegetables and meat with Szechuan sauce",
    price: 16,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 4,
    name: "Pesto Pasta with Grilled Chicken",
    description: "Al dente pasta with homemade basil pesto and grilled chicken",
    price: 18,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 5,
    name: "Golden Pumpkin Soup",
    description: "Creamy pumpkin soup with nutmeg and toasted pumpkin seeds",
    price: 9,
    category: "Soups",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 6,
    name: "Kale Quinoa Salad",
    description: "Fresh kale, quinoa, dried cranberries, and feta cheese with lemon dressing",
    price: 12,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 7,
    name: "Crispy Calamari",
    description: "Lightly battered calamari rings served with garlic aioli",
    price: 14,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1625938144327-cb75fe548fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: 10,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 9,
    name: "Artisanal Cheese Platter",
    description: "Selection of fine cheeses with crackers, nuts, and honey",
    price: 16,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 10,
    name: "Fresh Berry Mojito",
    description: "Refreshing cocktail with fresh berries, mint, lime, and rum",
    price: 11,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  }
];

export default MenuPage;
