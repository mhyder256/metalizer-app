
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ArrowRight, Recycle, DollarSign, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center space-y-6 animate-fade-in mb-16">
            <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-bold text-scrap-800 leading-tight`}>
              Turn Your Scrap Metal <br />
              Into <span className="text-green-600">Cash</span>
            </h1>
            <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-scrap-600 max-w-2xl mx-auto`}>
              Malaysia's leading platform for recycling scrap metal. Get instant quotes, 
              schedule pickups, and receive digital payments - all in one place.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link to="/quote">
                <Button className="bg-scrap-800 hover:bg-scrap-900 text-white px-8 py-6">
                  Get Instant Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-3 gap-8'} mt-12`}>
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Recycle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-scrap-800 mb-2">Easy Recycling</h3>
              <p className="text-scrap-600">
                Simply upload photos of your scrap metal and get an instant quote based on current market rates.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Timer className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-scrap-800 mb-2">Quick Pickup</h3>
              <p className="text-scrap-600">
                Schedule a convenient pickup time and our team will collect your scrap metal from your location.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-scrap-800 mb-2">Secure Payment</h3>
              <p className="text-scrap-600">
                Receive your payment digitally after successful pickup confirmation. Fast and secure.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
