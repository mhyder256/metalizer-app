
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ArrowRight, Recycle, DollarSign, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center space-y-6 animate-fade-in mb-16">
            <h1 className={`${isMobile ? 'text-5xl' : 'text-7xl'} font-bold text-scrap-800 dark:text-white leading-tight`}>
              {t("home.title")} <br />
              <span className={`${isMobile ? 'text-3xl' : 'text-4xl'} text-green-600 dark:text-green-400`}>{t("home.subtitle")}</span>
            </h1>
            <div className="flex justify-center gap-4 pt-4">
              <Link to="/quote">
                <Button className="bg-scrap-800 hover:bg-scrap-900 dark:bg-green-600 dark:hover:bg-green-700 text-white px-8 py-6">
                  {t("home.getQuote")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-3 gap-8'} mt-12`}>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <Recycle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-scrap-800 dark:text-white mb-2">{t("home.feature1.title")}</h3>
              <p className="text-scrap-600 dark:text-gray-300">{t("home.feature1.desc")}</p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Timer className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-scrap-800 dark:text-white mb-2">{t("home.feature2.title")}</h3>
              <p className="text-scrap-600 dark:text-gray-300">{t("home.feature2.desc")}</p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-scrap-800 dark:text-white mb-2">{t("home.feature3.title")}</h3>
              <p className="text-scrap-600 dark:text-gray-300">{t("home.feature3.desc")}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
