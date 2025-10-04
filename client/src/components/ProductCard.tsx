import { ExternalLink, Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface PlatformPrice {
  platform: string;
  price: number;
  originalPrice?: number;
  deliveryTime: string;
  inStock: boolean;
  url: string;
}

export interface Product {
  id: string;
  name: string;
  quantity: string;
  image: string;
  prices: PlatformPrice[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const lowestPrice = Math.min(...product.prices.filter(p => p.inStock).map(p => p.price));
  const highestPrice = Math.max(...product.prices.filter(p => p.inStock).map(p => p.price));
  const savings = highestPrice - lowestPrice;

  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-product-${product.id}`}>
      <CardHeader className="p-4">
        <div className="aspect-square relative rounded-md overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
            data-testid={`img-product-${product.id}`}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-3">
        <div>
          <h3 className="font-semibold text-base line-clamp-2" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground">{product.quantity}</p>
        </div>

        {savings > 0 && (
          <Badge variant="outline" className="bg-success/10 text-success border-success/20">
            Save ₹{savings.toFixed(0)} vs highest
          </Badge>
        )}

        <div className="grid grid-cols-2 gap-2">
          {product.prices.slice(0, 4).map((price) => (
            <div
              key={price.platform}
              className={`rounded-md border p-2 ${
                price.price === lowestPrice && price.inStock
                  ? "bg-success/10 border-success/30"
                  : "bg-muted/50"
              }`}
              data-testid={`price-card-${product.id}-${price.platform}`}
            >
              <div className="flex items-start justify-between gap-1">
                <span className="text-xs font-medium text-muted-foreground">
                  {price.platform}
                </span>
                {price.price === lowestPrice && price.inStock && (
                  <Check className="h-3 w-3 text-success flex-shrink-0" />
                )}
              </div>
              {price.inStock ? (
                <>
                  <p className="font-bold text-lg mt-1" data-testid={`text-price-${product.id}-${price.platform}`}>
                    ₹{price.price}
                  </p>
                  {price.originalPrice && price.originalPrice > price.price && (
                    <p className="text-xs text-muted-foreground line-through">
                      ₹{price.originalPrice}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    {price.deliveryTime}
                  </p>
                </>
              ) : (
                <p className="text-sm text-destructive mt-1">Out of Stock</p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {(() => {
          const bestPrice = product.prices.find(p => p.price === lowestPrice && p.inStock);
          return bestPrice ? (
            <Button
              className="w-full gap-2"
              onClick={() => window.open(bestPrice.url, '_blank')}
              data-testid={`button-buy-${product.id}`}
            >
              Buy on {bestPrice.platform}
              <ExternalLink className="h-4 w-4" />
            </Button>
          ) : (
            <Button disabled className="w-full">
              Out of Stock
            </Button>
          );
        })()}
      </CardFooter>
    </Card>
  );
}
