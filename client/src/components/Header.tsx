import { Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./ThemeToggle";
import { LocationModal } from "./LocationModal";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  currentLocation: string;
  onLocationChange: (location: string) => void;
}

export function Header({
  searchQuery,
  onSearchChange,
  currentLocation,
  onLocationChange,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center gap-4 px-4">
        <div className="flex items-center gap-3">
          <div className="h-16 w-16 rounded-md bg-primary flex items-center justify-center" data-testid="img-logo">
            <ShoppingCart className="h-8 w-8 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground hidden sm:inline">smart grocery shopping assistant</span>
        </div>
        
        <div className="flex-1 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for products..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              data-testid="input-search"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <LocationModal
            currentLocation={currentLocation}
            onLocationChange={onLocationChange}
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
