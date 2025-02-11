
import { Header } from "@/components/Header";
import { UploadSection } from "@/components/UploadSection";
import { QuotationCard } from "@/components/QuotationCard";

const GetQuote = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold text-scrap-800">
              Get Your Instant Quote
            </h1>
            <p className="text-lg text-scrap-600 max-w-2xl mx-auto">
              Upload photos of your scrap metal, get instant quotes, and schedule pickup
              with digital payments. It's that simple.
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
