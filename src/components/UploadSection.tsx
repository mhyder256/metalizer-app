
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const UploadSection = () => {
  const [images, setImages] = useState<string[]>([]);
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setImages((prev) => [...prev, e.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
      
      toast({
        title: "Images uploaded successfully",
        description: "Our team will review your submission shortly.",
      });
    }
  };

  return (
    <Card className="p-6 backdrop-blur-sm bg-white/30 border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-scrap-800">Upload Scrap Photos</h2>
          <p className="text-scrap-600 mt-2">
            Take clear photos of your scrap metal for accurate quotation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Button
            variant="outline"
            className="h-40 relative overflow-hidden group border-dashed border-2"
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            <input
              type="file"
              id="file-upload"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 transition-transform group-hover:scale-105">
              <Upload className="h-8 w-8 text-scrap-500" />
              <span className="text-sm text-scrap-600">Upload Photos</span>
            </div>
          </Button>

          <Button
            variant="outline"
            className="h-40 relative overflow-hidden group border-dashed border-2"
            onClick={() => {
              toast({
                title: "Camera access required",
                description: "Please allow camera access to take photos.",
              });
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 transition-transform group-hover:scale-105">
              <Camera className="h-8 w-8 text-scrap-500" />
              <span className="text-sm text-scrap-600">Take Photo</span>
            </div>
          </Button>
        </div>

        {images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 animate-slide-up">
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden border border-gray-200"
              >
                <img
                  src={image}
                  alt={`Uploaded scrap ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};
