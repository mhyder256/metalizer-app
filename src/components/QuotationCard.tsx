
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Truck, Scale } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const QuotationCard = () => {
  const isMobile = useIsMobile();

  return (
    <Card className={`backdrop-blur-sm bg-white/30 border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in ${
      isMobile ? 'p-4' : 'p-6'
    }`}>
      <div className="space-y-4">
        <div className={`flex ${isMobile ? 'flex-col space-y-2' : 'justify-between items-start'}`}>
          <div>
            <h3 className={`font-semibold text-scrap-800 ${isMobile ? 'text-lg' : 'text-xl'}`}>
              Your Quotation
            </h3>
            <p className="text-sm text-scrap-600 mt-1">Based on your submitted photos</p>
          </div>
          <span className={`font-bold text-scrap-800 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
            RM 245.00
          </span>
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
          <div className="flex justify-between items-center text-sm">
            <span className="text-scrap-600">Price per KG</span>
            <span className="font-medium text-green-600">RM 4.90/kg</span>
          </div>
        </div>

        <div className={`pt-4 space-y-3 ${isMobile ? 'mt-2' : ''}`}>
          <Button variant="outline" className="w-full">
            <Truck className={`mr-2 ${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} />
            Schedule Pickup
          </Button>
          <Button className="w-full bg-scrap-800 hover:bg-scrap-900 text-white" disabled>
            <DollarSign className={`mr-2 ${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} />
            Payment Available After Pickup Confirmation
          </Button>
          <p className={`text-center text-scrap-600 ${isMobile ? 'text-[10px]' : 'text-xs'}`}>
            Digital payment will be processed after pickup schedule is confirmed
          </p>
        </div>
      </div>
    </Card>
  );
};
