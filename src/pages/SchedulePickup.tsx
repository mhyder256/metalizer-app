
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, DollarSign } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const SchedulePickup = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-scrap-800">
              Schedule Your Pickup
            </h1>
            <p className="text-lg text-scrap-600 max-w-2xl mx-auto">
              Review your quotation details and schedule a convenient pickup time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="md:col-span-2 space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Pickup Details</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-scrap-600 mt-1" />
                    <div>
                      <label className="block text-sm font-medium text-scrap-700">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2"
                        placeholder="Enter your address"
                      />
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CalendarDays className="w-5 h-5 text-scrap-600 mt-1" />
                    <div>
                      <label className="block text-sm font-medium text-scrap-700">
                        Pickup Date
                      </label>
                      <input
                        type="date"
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2"
                      />
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-scrap-600 mt-1" />
                    <div>
                      <label className="block text-sm font-medium text-scrap-700">
                        Preferred Time
                      </label>
                      <select className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2">
                        <option>Morning (9AM - 12PM)</option>
                        <option>Afternoon (12PM - 3PM)</option>
                        <option>Evening (3PM - 6PM)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Additional Notes</h2>
                <textarea
                  className="w-full rounded-md border border-gray-300 px-4 py-2 h-32"
                  placeholder="Any special instructions for pickup?"
                />
              </Card>
            </div>

            {/* Floating summary card */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <Card className={`backdrop-blur-sm bg-white/30 border border-gray-200 shadow-lg ${
                  isMobile ? 'p-4' : 'p-6'
                }`}>
                  <h3 className={`font-semibold text-scrap-800 ${isMobile ? 'text-lg' : 'text-xl'} mb-4`}>
                    Quotation Summary
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-scrap-600">Weight</span>
                      <span className="font-medium">50 kg</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-scrap-600">Metal Type</span>
                      <span className="font-medium">Mixed Metals</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-scrap-600">Quality Grade</span>
                      <span className="font-medium">Grade A</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-scrap-600">Price per KG</span>
                      <span className="font-medium text-green-600">RM 4.90/kg</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-scrap-800">Total Amount</span>
                        <span className="font-bold text-scrap-800 text-xl">RM 245.00</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-scrap-800 hover:bg-scrap-900 text-white">
                    <DollarSign className={`${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} />
                    Confirm Schedule
                  </Button>
                  <p className={`text-center text-scrap-600 mt-4 ${isMobile ? 'text-[10px]' : 'text-xs'}`}>
                    Pickup confirmation will be sent to your email
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
