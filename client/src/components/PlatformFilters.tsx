import { Badge } from "@/components/ui/badge";

const platforms = [
  { id: "all", name: "All Platforms" },
  { id: "zepto", name: "Zepto" },
  { id: "blinkit", name: "Blinkit" },
  { id: "bigbasket", name: "BigBasket" },
  { id: "swiggy", name: "Swiggy Instamart" },
  { id: "reliance", name: "Reliance" },
];

interface PlatformFiltersProps {
  selectedPlatforms: string[];
  onPlatformToggle: (platformId: string) => void;
}

export function PlatformFilters({ selectedPlatforms, onPlatformToggle }: PlatformFiltersProps) {
  const isSelected = (platformId: string) => selectedPlatforms.includes(platformId);

  return (
    <div className="border-b bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {platforms.map((platform) => (
            <Badge
              key={platform.id}
              variant={isSelected(platform.id) ? "default" : "outline"}
              className="cursor-pointer whitespace-nowrap hover-elevate active-elevate-2"
              onClick={() => onPlatformToggle(platform.id)}
              data-testid={`badge-platform-${platform.id}`}
            >
              {platform.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
