import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { PlatformFilters } from "@/components/PlatformFilters";
import { ProductCard, type Product } from "@/components/ProductCard";
import { HeroSection } from "@/components/HeroSection";

// TODO: remove mock data - replace with real API data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Tata Salt, Iodised',
    quantity: '1 kg',
    image: 'https://images.unsplash.com/photo-1612165638932-4bb89c3e2e7b?w=400&h=400&fit=crop',
    prices: [
      { platform: 'Zepto', price: 22, originalPrice: 25, deliveryTime: '10 min', inStock: true, url: '#' },
      { platform: 'Blinkit', price: 24, deliveryTime: '15 min', inStock: true, url: '#' },
      { platform: 'BigBasket', price: 23, deliveryTime: '2 hours', inStock: true, url: '#' },
      { platform: 'Swiggy', price: 26, deliveryTime: '20 min', inStock: false, url: '#' },
    ],
  },
  {
    id: '2',
    name: 'Amul Taaza Toned Fresh Milk',
    quantity: '500 ml',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop',
    prices: [
      { platform: 'Zepto', price: 28, deliveryTime: '10 min', inStock: true, url: '#' },
      { platform: 'Blinkit', price: 27, deliveryTime: '15 min', inStock: true, url: '#' },
      { platform: 'BigBasket', price: 29, deliveryTime: '2 hours', inStock: true, url: '#' },
      { platform: 'Swiggy', price: 28, deliveryTime: '20 min', inStock: true, url: '#' },
    ],
  },
  {
    id: '3',
    name: 'Fresho Tomato - Hybrid',
    quantity: '500 g',
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop',
    prices: [
      { platform: 'Zepto', price: 18, deliveryTime: '10 min', inStock: true, url: '#' },
      { platform: 'Blinkit', price: 16, originalPrice: 20, deliveryTime: '15 min', inStock: true, url: '#' },
      { platform: 'BigBasket', price: 19, deliveryTime: '2 hours', inStock: true, url: '#' },
      { platform: 'Swiggy', price: 17, deliveryTime: '20 min', inStock: true, url: '#' },
    ],
  },
  {
    id: '4',
    name: 'Britannia Good Day Butter Cookies',
    quantity: '200 g',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop',
    prices: [
      { platform: 'Zepto', price: 45, deliveryTime: '10 min', inStock: true, url: '#' },
      { platform: 'Blinkit', price: 42, originalPrice: 50, deliveryTime: '15 min', inStock: true, url: '#' },
      { platform: 'BigBasket', price: 44, deliveryTime: '2 hours', inStock: true, url: '#' },
      { platform: 'Swiggy', price: 46, deliveryTime: '20 min', inStock: true, url: '#' },
    ],
  },
  {
    id: '5',
    name: 'Fresho Onion',
    quantity: '1 kg',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=400&fit=crop',
    prices: [
      { platform: 'Zepto', price: 35, deliveryTime: '10 min', inStock: true, url: '#' },
      { platform: 'Blinkit', price: 32, deliveryTime: '15 min', inStock: true, url: '#' },
      { platform: 'BigBasket', price: 34, deliveryTime: '2 hours', inStock: true, url: '#' },
      { platform: 'Swiggy', price: 36, deliveryTime: '20 min', inStock: true, url: '#' },
    ],
  },
  {
    id: '6',
    name: 'India Gate Basmati Rice',
    quantity: '1 kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    prices: [
      { platform: 'Zepto', price: 165, deliveryTime: '10 min', inStock: true, url: '#' },
      { platform: 'Blinkit', price: 160, originalPrice: 180, deliveryTime: '15 min', inStock: true, url: '#' },
      { platform: 'BigBasket', price: 162, deliveryTime: '2 hours', inStock: true, url: '#' },
      { platform: 'Swiggy', price: 168, deliveryTime: '20 min', inStock: true, url: '#' },
    ],
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentLocation, setCurrentLocation] = useState("400001");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["all"]);

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
    return mockProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (selectedPlatforms.includes("all")) {
        return matchesSearch;
      }

      const hasPlatform = product.prices.some(price =>
        selectedPlatforms.some(platform =>
          price.platform.toLowerCase().includes(platform.toLowerCase())
        )
      );

      return matchesSearch && hasPlatform;
    });
  }, [searchQuery, selectedPlatforms]);

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
        {filteredProducts.length > 0 ? (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                {searchQuery ? `Results for "${searchQuery}"` : "Popular Products"}
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
