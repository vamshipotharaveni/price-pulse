import { useState } from "react";
import { useRoute } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "@/components/QuantitySelector";
import type { Product } from "@/data/products";
import { products } from "@/data/products";

export default function ProductPage() {
  const [match, params] = useRoute("/product/:id");
  const id = params?.id;
  const product = products.find(p => p.id === id) as Product | undefined;
  const [selectedQuantity, setSelectedQuantity] = useState(product?.defaultQuantity || "1 kg");

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  const prices = product.getPrices(selectedQuantity);

  return (
    <div className="p-6">
      <Card>
        <CardHeader className="p-4">
          <div className="flex items-center gap-4">
            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded" />
            <div>
              <h1 className="text-2xl font-semibold">{product.name}</h1>
              <p className="text-sm text-muted-foreground">{product.category}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <QuantitySelector
            options={product.quantityOptions}
            selectedQuantity={selectedQuantity}
            onQuantityChange={setSelectedQuantity}
          />

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {prices.map((p) => (
              <div key={p.platform} className="border rounded p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{p.platform}</div>
                    <div className="text-sm text-muted-foreground">{p.deliveryTime}</div>
                  </div>
                  <div className="text-lg font-bold">₹{p.price}</div>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button variant="outline" onClick={() => window.open(p.url, "_blank")}>Buy on {p.platform}</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
