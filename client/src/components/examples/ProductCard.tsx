import { ProductCard } from '../ProductCard';

export default function ProductCardExample() {
  const mockProduct = {
    id: '1',
    name: 'Tata Salt, Iodised',
    quantity: '1 kg',
    image: 'https://images.unsplash.com/photo-1612165638932-4bb89c3e2e7b?w=400&h=400&fit=crop',
    prices: [
      {
        platform: 'Zepto',
        price: 22,
        originalPrice: 25,
        deliveryTime: '10 min',
        inStock: true,
        url: '#',
      },
      {
        platform: 'Blinkit',
        price: 24,
        deliveryTime: '15 min',
        inStock: true,
        url: '#',
      },
      {
        platform: 'BigBasket',
        price: 23,
        deliveryTime: '2 hours',
        inStock: true,
        url: '#',
      },
      {
        platform: 'Swiggy',
        price: 26,
        deliveryTime: '20 min',
        inStock: false,
        url: '#',
      },
    ],
  };

  return (
    <div className="p-4 max-w-sm">
      <ProductCard product={mockProduct} />
    </div>
  );
}
