import { ProductCard } from '../ProductCard';
import { products } from '@/data/products';

export default function ProductCardExample() {
  const mockProduct = products[0];

  return (
    <div className="p-4 max-w-sm">
      <ProductCard product={mockProduct} />
    </div>
  );
}
