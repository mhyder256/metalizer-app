
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageSquare } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-scrap-600 to-scrap-800 bg-clip-text text-transparent">
              My Scrap
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-scrap-600">
              <MessageSquare className="h-5 w-5 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
};
