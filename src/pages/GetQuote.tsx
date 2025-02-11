
import { Header } from "@/components/Header";
import { UploadSection } from "@/components/UploadSection";
import { QuotationCard } from "@/components/QuotationCard";
import { useLanguage } from "@/contexts/LanguageContext";

const GetQuote = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold text-scrap-800 dark:text-white">
              {t("quote.title")}
            </h1>
            <p className="text-lg text-scrap-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("quote.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <UploadSection />
            <QuotationCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default GetQuote;

