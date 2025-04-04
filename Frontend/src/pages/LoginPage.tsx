
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { LogIn, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import axios from '@/api/axios'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
  
    try {
      const response = await axios.post('/auth/login', { email, password });
  
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        window.dispatchEvent(new Event('storage')); // 🔥 Force Navbar update
        toast.success('Logged in successfully!');
        navigate('/booking');
      } else {
        toast.error('Invalid response from server');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed, please try again');
    }
  };
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card p-8 rounded-lg shadow-lg border border-muted w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-muted border border-input rounded-md px-3 py-2"
              placeholder="Your email"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-muted border border-input rounded-md px-3 py-2 pr-10"
                placeholder="Your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="flex justify-end mt-1">
              <Link to="/forgot-password" className="text-sm text-gold hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-gold hover:bg-gold-dark text-black flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                Logging in...
              </div>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </>
            )}
          </Button>
          
          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/signup" className="text-gold hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
