import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { PlatformFilters } from "@/components/PlatformFilters";
import { ProductCard } from "@/components/ProductCard";
import { HeroSection } from "@/components/HeroSection";
import { Badge } from "@/components/ui/badge";
import { products, categories } from "@/data/products";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentLocation, setCurrentLocation] = useState("400001");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["all"]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handlePlatformToggle = (platformId: string) => {
    if (platformId === "all") {
      setSelectedPlatforms(["all"]);
    } else {
      const newSelected = selectedPlatforms.includes(platformId)
        ? selectedPlatforms.filter(id => id !== platformId)
        : [...selectedPlatforms.filter(id => id !== "all"), platformId];
      setSelectedPlatforms(newSelected.length === 0 ? ["all"] : newSelected);
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      
      if (selectedPlatforms.includes("all")) {
        return matchesSearch && matchesCategory;
      }

      const prices = product.getPrices(product.defaultQuantity);
      const hasPlatform = prices.some(price =>
        selectedPlatforms.some(platform =>
          price.platform.toLowerCase().includes(platform.toLowerCase())
        )
      );

      return matchesSearch && hasPlatform && matchesCategory;
    });
  }, [searchQuery, selectedPlatforms, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentLocation={currentLocation}
        onLocationChange={setCurrentLocation}
      />
      
      {!searchQuery && <HeroSection />}
      
      <PlatformFilters
        selectedPlatforms={selectedPlatforms}
        onPlatformToggle={handlePlatformToggle}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Shop by Category</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Badge
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer whitespace-nowrap hover-elevate active-elevate-2"
              onClick={() => setSelectedCategory(null)}
              data-testid="badge-category-all"
            >
              All Categories
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer whitespace-nowrap hover-elevate active-elevate-2"
                onClick={() => setSelectedCategory(category)}
                data-testid={`badge-category-${category}`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                {searchQuery ? `Results for "${searchQuery}"` : selectedCategory || "All Products"}
              </h2>
              <p className="text-muted-foreground">
                Found {filteredProducts.length} products
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </main>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>© 2024 Price Pulse. Compare prices across Zepto, Blinkit, BigBasket, Swiggy Instamart, and Reliance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
