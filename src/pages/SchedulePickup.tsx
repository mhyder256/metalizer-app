
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, DollarSign } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";

const SchedulePickup = () => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-scrap-800 dark:text-white">
              {t("pickup.title")}
            </h1>
            <p className="text-lg text-scrap-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("pickup.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="md:col-span-2 space-y-6">
              <Card className="p-6 dark:bg-gray-800/50">
                <h2 className="text-xl font-semibold mb-4 dark:text-white">{t("pickup.title")}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-scrap-600 dark:text-gray-400 mt-1" />
                    <div>
                      <label className="block text-sm font-medium text-scrap-700 dark:text-gray-300">
                        {t("pickup.location")}
                      </label>
                      <input
                        type="text"
                        className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2"
                        placeholder={t("pickup.location")}
                      />
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CalendarDays className="w-5 h-5 text-scrap-600 dark:text-gray-400 mt-1" />
                    <div>
                      <label className="block text-sm font-medium text-scrap-700 dark:text-gray-300">
                        {t("pickup.date")}
                      </label>
                      <input
                        type="date"
                        className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2"
                      />
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-scrap-600 dark:text-gray-400 mt-1" />
                    <div>
                      <label className="block text-sm font-medium text-scrap-700 dark:text-gray-300">
                        {t("pickup.time")}
                      </label>
                      <select className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2">
                        <option>Morning (9AM - 12PM)</option>
                        <option>Afternoon (12PM - 3PM)</option>
                        <option>Evening (3PM - 6PM)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 dark:bg-gray-800/50">
                <h2 className="text-xl font-semibold mb-4 dark:text-white">{t("pickup.notes")}</h2>
                <textarea
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 h-32"
                  placeholder={t("pickup.notes.placeholder")}
                />
              </Card>
            </div>

            {/* Floating summary card */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <Card className={`backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 shadow-lg ${
                  isMobile ? 'p-4' : 'p-6'
                }`}>
                  <h3 className={`font-semibold text-scrap-800 dark:text-white ${isMobile ? 'text-lg' : 'text-xl'} mb-4`}>
                    {t("pickup.summary")}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-scrap-600 dark:text-gray-400">{t("common.weight")}</span>
                      <span className="font-medium dark:text-white">50 kg</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-scrap-600 dark:text-gray-400">{t("common.metalType")}</span>
                      <span className="font-medium dark:text-white">Mixed Metals</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-scrap-600 dark:text-gray-400">{t("common.quality")}</span>
                      <span className="font-medium dark:text-white">Grade A</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-scrap-600 dark:text-gray-400">{t("common.pricePerKg")}</span>
                      <span className="font-medium text-green-600 dark:text-green-400">RM 4.90/kg</span>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-scrap-800 dark:text-white">{t("common.total")}</span>
                        <span className="font-bold text-scrap-800 dark:text-white text-xl">RM 245.00</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-scrap-800 hover:bg-scrap-900 dark:bg-green-600 dark:hover:bg-green-700 text-white">
                    <DollarSign className={`${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'} mr-2`} />
                    {t("common.schedule")}
                  </Button>
                  <p className={`text-center text-scrap-600 dark:text-gray-400 mt-4 ${isMobile ? 'text-[10px]' : 'text-xs'}`}>
                    {t("common.payment")}
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchedulePickup;

