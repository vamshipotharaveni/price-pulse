import { useState } from "react";
import { MapPin, Locate } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LocationModalProps {
  currentLocation: string;
  onLocationChange: (location: string) => void;
}

export function LocationModal({ currentLocation, onLocationChange }: LocationModalProps) {
  const [pincode, setPincode] = useState("");
  const [open, setOpen] = useState(false);

  const handleSetLocation = () => {
    if (pincode.trim()) {
      onLocationChange(pincode);
      setOpen(false);
      setPincode("");
    }
  };

  const handleDetectLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Use Nominatim reverse geocoding to get address details (including postcode)
          const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

          fetch(url, { headers: { 'Accept': 'application/json' } })
            .then((res) => res.json())
            .then((data) => {
              const postcode = data?.address?.postcode;
              if (postcode) {
                onLocationChange(postcode);
              } else if (data?.display_name) {
                // fallback to human readable location if no postcode
                onLocationChange(data.display_name.split(",").slice(0, 2).join(", "));
              } else {
                // last resort mock
                onLocationChange("400001");
              }
              setOpen(false);
            })
            .catch((err) => {
              console.error("Reverse geocoding failed:", err);
              onLocationChange("400001");
              setOpen(false);
            });
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="gap-2" data-testid="button-location-selector">
          <MapPin className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLocation || "Set Location"}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Set Delivery Location</DialogTitle>
          <DialogDescription>
            Enter your pincode to see products available in your area
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="pincode">Pincode</Label>
            <Input
              id="pincode"
              placeholder="Enter 6-digit pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              maxLength={6}
              data-testid="input-pincode"
            />
          </div>
          <Button onClick={handleSetLocation} data-testid="button-set-location">
            Set Location
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={handleDetectLocation}
            className="gap-2"
            data-testid="button-detect-location"
          >
            <Locate className="h-4 w-4" />
            Detect My Location
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
