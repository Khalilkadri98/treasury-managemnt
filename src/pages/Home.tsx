import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Manage Your Cash Flow
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Track, analyze, and predict your company's financial future with our advanced cash flow management system.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/signin">
              <Button>Get Started</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;