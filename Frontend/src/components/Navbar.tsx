import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateUser = async () => {
      const token = localStorage.getItem("token");
  
      if (token) {
        try {
          const { data } = await axios.get("/user",{        
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
          }});
          setUser(data);
        } catch (error) {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };
  
    updateUser(); // Fetch user on mount
  
    const handleStorageChange = async () => {
      await updateUser(); // Update user on localStorage change
    };
  
    window.addEventListener("storage", handleStorageChange);
  
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  
  
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gold flex items-center">
          <span className="mr-1">Luxe</span>
          <span className="text-foreground">Haven</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLinks location={location} />
          <div className="flex space-x-3">
            {user ? (
              <div className="relative">
                <button
                  className="flex flex-col items-center"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <User
                    size={28}
                    className="text-gold hover:text-gold-dark transition"
                  />
                  <span className="text-sm text-foreground mt-1">
                    {user.username}
                  </span>
                </button>

                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-background border border-gold rounded-lg shadow-lg p-2"
                  >
                    <Link onClick={() => setDropdownOpen(false)} to="/booking">
                      <Button
                        variant="outline"
                        className="w-full text-gold border-gold hover:bg-gold  mb-2 hover:text-black"
                      >
                        Book Table
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setDropdownOpen(false)}
                      to="/myreservations"
                    >
                      <Button
                        variant="outline"
                        className="w-full text-gold border-gold hover:bg-gold hover:text-black"
                      >
                        My Reservations
                      </Button>
                    </Link>
                    <button
                      onClick={() => {
                        localStorage.removeItem("token"); // Remove token from localStorage
                        window.location.href = "/"; // Redirect to main page
                      }}
                      className="w-full mt-2 bg-gold text-black hover:bg-gold-dark rounded-lg py-2 transition"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-black"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-gold text-black hover:bg-gold-dark">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm p-4 shadow-lg"
          >
            <div className="flex flex-col space-y-4 py-2">
              <NavLinks
                location={location}
                mobile={true}
                setIsOpen={setIsOpen}
              />
              <div className="flex flex-col space-y-3 pt-2">
                {user ? (
                  <>
                    <Link onClick={() => setDropdownOpen(false)} to="/booking">
                      <Button
                        variant="outline"
                        className="w-full border-gold text-gold hover:bg-gold hover:text-black mb-2"
                      >
                        Book Table
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setDropdownOpen(false)}
                      to="/myreservations"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-gold text-gold hover:bg-gold hover:text-black"
                      >
                        My Reservations
                      </Button>
                    </Link>
                    <button
                      onClick={() => {
                        localStorage.removeItem("token"); // Remove token from localStorage
                        window.location.href = "/"; // Redirect to main page
                      }}
                      className="w-full mt-2 bg-gold text-black hover:bg-gold-dark rounded-lg py-2 transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button
                        variant="outline"
                        className="w-full border-gold text-gold hover:bg-gold hover:text-black"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-gold text-black hover:bg-gold-dark">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

interface NavLinksProps {
  location: { pathname: string };
  mobile?: boolean;
  setIsOpen?: (value: boolean) => void;
}

const NavLinks = ({ location, mobile, setIsOpen }: NavLinksProps) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`${
            location.pathname === link.path ? "text-gold" : "text-foreground"
          } hover:text-gold transition-colors ${mobile ? "text-lg py-2" : ""}`}
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
