
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { ThemeLanguageToggle } from "./ThemeLanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  // Add scroll listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-scrap-600 to-scrap-800 dark:from-gray-200 dark:to-white bg-clip-text text-transparent">
                REGrab
              </h1>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            {location.pathname !== "/quote" && (
              <Link to="/quote">
                <Button variant="outline" size="sm" className="text-scrap-600 dark:text-gray-200">
                  {t("common.getQuote")}
                </Button>
              </Link>
            )}
            <Button variant="ghost" size="sm" className="text-scrap-600 dark:text-gray-200">
              <MessageSquare className="h-5 w-5 mr-2" />
              {!isMobile && t("common.contact")}
            </Button>
            <ThemeLanguageToggle />
          </div>
        </div>
      </div>
      <Separator className="dark:border-gray-800" />
    </header>
  );
};
