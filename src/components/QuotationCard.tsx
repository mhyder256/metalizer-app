
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Truck } from "lucide-react";

export const QuotationCard = () => {
  return (
    <Card className="p-6 backdrop-blur-sm bg-white/30 border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-scrap-800">Your Quotation</h3>
            <p className="text-sm text-scrap-600 mt-1">Based on your submitted photos</p>
          </div>
          <span className="text-2xl font-bold text-scrap-800">$245.00</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-scrap-600">Estimated Weight</span>
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
        </div>

        <div className="pt-4 space-y-3">
          <Button className="w-full bg-scrap-800 hover:bg-scrap-900 text-white">
            <DollarSign className="h-4 w-4 mr-2" />
            Accept & Proceed to Payment
          </Button>
          <Button variant="outline" className="w-full">
            <Truck className="h-4 w-4 mr-2" />
            Schedule Pickup
          </Button>
        </div>
      </div>
    </Card>
  );
};
