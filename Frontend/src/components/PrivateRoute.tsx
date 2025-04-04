// components/PrivateRoute.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("token"); // Or use context/Redux

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect if not logged in
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null; // Or loading spinner

  return <>{children}</>;
};

export default PrivateRoute;
