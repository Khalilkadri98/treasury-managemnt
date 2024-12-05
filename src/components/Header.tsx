import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary">
            CashFlow Cuddler
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/services" className="text-gray-600 hover:text-primary">
              Services
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary">
              About Us
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-primary">
              Dashboard
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};