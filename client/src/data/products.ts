import type { QuantityOption } from "@/components/QuantitySelector";

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
  category: string;
  image: string;
  quantityOptions: QuantityOption[];
  defaultQuantity: string;
  getPrices: (quantity: string) => PlatformPrice[];
}

export const categories = [
  "Vegetables",
  "Fruits",
  "Grains & Cereals",
  "Pulses & Legumes",
  "Oils & Ghee",
  "Spices",
  "Dairy & Eggs",
  "Meat & Seafood",
  "Beverages",
  "Packaged Foods",
  "Household Items",
];

// TODO: remove mock data - replace with real API data
function createProduct(
  id: string,
  name: string,
  category: string,
  image: string,
  quantityOptions: QuantityOption[],
  defaultQuantity: string,
  priceCalculator: (qty: string) => number
): Product {
  const seed = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const seededRandom = (index: number) => {
    const x = Math.sin(seed + index) * 10000;
    return x - Math.floor(x);
  };

  const priceCache: Map<string, PlatformPrice[]> = new Map();

  quantityOptions.forEach((option, index) => {
    const basePrice = priceCalculator(option.label);
    const quantitySeed = seed + index * 100;
    
    const qtySeededRandom = (idx: number) => {
      const x = Math.sin(quantitySeed + idx) * 10000;
      return x - Math.floor(x);
    };

    const prices: PlatformPrice[] = [
      {
        platform: "Zepto",
        price: Math.round(basePrice + qtySeededRandom(1) * 5),
        originalPrice: qtySeededRandom(5) > 0.5 ? Math.round(basePrice + qtySeededRandom(1) * 5 + 5) : undefined,
        deliveryTime: "10 min",
        inStock: qtySeededRandom(2) > 0.1,
        url: "#",
      },
      {
        platform: "Blinkit",
        price: Math.round(basePrice + qtySeededRandom(3) * 4),
        deliveryTime: "15 min",
        inStock: qtySeededRandom(4) > 0.1,
        url: "#",
      },
      {
        platform: "BigBasket",
        price: Math.round(basePrice + qtySeededRandom(5) * 6),
        deliveryTime: "2 hours",
        inStock: qtySeededRandom(6) > 0.05,
        url: "#",
      },
      {
        platform: "Swiggy",
        price: Math.round(basePrice + qtySeededRandom(7) * 7),
        deliveryTime: "20 min",
        inStock: qtySeededRandom(8) > 0.15,
        url: "#",
      },
      {
        platform: "Reliance",
        price: Math.round(basePrice + qtySeededRandom(9) * 5),
        deliveryTime: "Next day",
        inStock: qtySeededRandom(10) > 0.1,
        url: "#",
      },
    ];

    priceCache.set(option.label, prices);
  });

  return {
    id,
    name,
    category,
    image,
    quantityOptions,
    defaultQuantity,
    getPrices: (qty: string) => priceCache.get(qty) || priceCache.get(defaultQuantity) || [],
  };
}

export const products: Product[] = [
  createProduct(
    "veg-potato",
    "Potato",
    "Vegetables",
    "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 2, unit: "kg", label: "2 kg" },
      { value: 5, unit: "kg", label: "5 kg" },
    ],
    "1 kg",
    (qty) => {
      const multiplier = qty === "500 g" ? 0.5 : qty === "2 kg" ? 2 : qty === "5 kg" ? 5 : 1;
      return Math.round(30 * multiplier);
    }
  ),
  createProduct(
    "veg-onion",
    "Onion",
    "Vegetables",
    "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 2, unit: "kg", label: "2 kg" },
    ],
    "1 kg",
    (qty) => {
      const multiplier = qty === "500 g" ? 0.5 : qty === "2 kg" ? 2 : 1;
      return Math.round(35 * multiplier);
    }
  ),
  createProduct(
    "veg-tomato",
    "Tomato",
    "Vegetables",
    "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop",
    [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "250 g" ? 0.25 : qty === "1 kg" ? 1 : 0.5;
      return Math.round(40 * multiplier);
    }
  ),
  createProduct(
    "veg-carrot",
    "Carrot",
    "Vegetables",
    "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
    [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "250 g" ? 0.25 : qty === "1 kg" ? 1 : 0.5;
      return Math.round(50 * multiplier);
    }
  ),
  createProduct(
    "veg-beans",
    "Green Beans",
    "Vegetables",
    "https://images.unsplash.com/photo-1591868405957-51e0d0c3d6fc?w=400&h=400&fit=crop",
    [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "250 g",
    (qty) => {
      const multiplier = qty === "500 g" ? 2 : 1;
      return Math.round(25 * multiplier);
    }
  ),
  createProduct(
    "veg-cauliflower",
    "Cauliflower",
    "Vegetables",
    "https://images.unsplash.com/photo-1568584711271-81084c07d2b4?w=400&h=400&fit=crop",
    [
      { value: 1, unit: "piece", label: "1 piece" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "1 piece",
    () => 40
  ),
  createProduct(
    "veg-cabbage",
    "Cabbage",
    "Vegetables",
    "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400&h=400&fit=crop",
    [
      { value: 1, unit: "piece", label: "1 piece" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "1 piece",
    () => 35
  ),
  createProduct(
    "veg-brinjal",
    "Brinjal (Eggplant)",
    "Vegetables",
    "https://images.unsplash.com/photo-1659261200833-ec993db3d6e0?w=400&h=400&fit=crop",
    [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "250 g",
    (qty) => {
      const multiplier = qty === "500 g" ? 2 : 1;
      return Math.round(20 * multiplier);
    }
  ),
  createProduct(
    "veg-green-chili",
    "Green Chilies",
    "Vegetables",
    "https://images.unsplash.com/photo-1583700039584-a4f0c1bd0ba5?w=400&h=400&fit=crop",
    [
      { value: 100, unit: "g", label: "100 g" },
      { value: 250, unit: "g", label: "250 g" },
    ],
    "100 g",
    (qty) => {
      const multiplier = qty === "250 g" ? 2.5 : 1;
      return Math.round(10 * multiplier);
    }
  ),
  createProduct(
    "veg-spinach",
    "Spinach (Palak)",
    "Vegetables",
    "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop",
    [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "250 g",
    (qty) => {
      const multiplier = qty === "500 g" ? 2 : 1;
      return Math.round(20 * multiplier);
    }
  ),
  createProduct(
    "veg-capsicum",
    "Capsicum (Bell Pepper)",
    "Vegetables",
    "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop",
    [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "250 g",
    (qty) => {
      const multiplier = qty === "500 g" ? 2 : 1;
      return Math.round(35 * multiplier);
    }
  ),
  createProduct(
    "veg-garlic",
    "Garlic",
    "Vegetables",
    "https://images.unsplash.com/photo-1619514430739-94b131d9b9d8?w=400&h=400&fit=crop",
    [
      { value: 100, unit: "g", label: "100 g" },
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "100 g",
    (qty) => {
      const multiplier = qty === "100 g" ? 1 : qty === "250 g" ? 2.5 : 5;
      return Math.round(20 * multiplier);
    }
  ),
  createProduct(
    "veg-ginger",
    "Ginger",
    "Vegetables",
    "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    [
      { value: 100, unit: "g", label: "100 g" },
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "100 g",
    (qty) => {
      const multiplier = qty === "100 g" ? 1 : qty === "250 g" ? 2.5 : 5;
      return Math.round(25 * multiplier);
    }
  ),
  createProduct(
    "fruit-apple",
    "Apple",
    "Fruits",
    "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 2, unit: "kg", label: "2 kg" },
    ],
    "1 kg",
    (qty) => {
      const multiplier = qty === "500 g" ? 0.5 : qty === "2 kg" ? 2 : 1;
      return Math.round(160 * multiplier);
    }
  ),
  createProduct(
    "fruit-banana",
    "Banana",
    "Fruits",
    "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
    [
      { value: 1, unit: "dozen", label: "1 dozen" },
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "1 dozen",
    () => 50
  ),
  createProduct(
    "fruit-orange",
    "Orange",
    "Fruits",
    "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(50 * multiplier);
    }
  ),
  createProduct(
    "fruit-grapes",
    "Grapes",
    "Fruits",
    "https://images.unsplash.com/photo-1599819177841-6f816438e74a?w=400&h=400&fit=crop",
    [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "250 g" ? 0.25 : qty === "1 kg" ? 1 : 0.5;
      return Math.round(140 * multiplier);
    }
  ),
  createProduct(
    "fruit-mango",
    "Mango",
    "Fruits",
    "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 2, unit: "kg", label: "2 kg" },
    ],
    "1 kg",
    (qty) => {
      const multiplier = qty === "500 g" ? 0.5 : qty === "2 kg" ? 2 : 1;
      return Math.round(120 * multiplier);
    }
  ),
  createProduct(
    "fruit-papaya",
    "Papaya",
    "Fruits",
    "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=400&h=400&fit=crop",
    [
      { value: 1, unit: "piece", label: "1 piece" },
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "1 piece",
    () => 40
  ),
  createProduct(
    "fruit-pomegranate",
    "Pomegranate",
    "Fruits",
    "https://images.unsplash.com/photo-1589458431969-2e0769d9b9f1?w=400&h=400&fit=crop",
    [
      { value: 1, unit: "piece", label: "1 piece" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "1 piece",
    () => 70
  ),
  createProduct(
    "fruit-lemon",
    "Lemon",
    "Fruits",
    "https://images.unsplash.com/photo-1590502593747-42a996133562?w=400&h=400&fit=crop",
    [
      { value: 100, unit: "g", label: "100 g" },
      { value: 250, unit: "g", label: "250 g" },
    ],
    "100 g",
    (qty) => {
      const multiplier = qty === "250 g" ? 2.5 : 1;
      return Math.round(10 * multiplier);
    }
  ),
  createProduct(
    "grain-rice",
    "Rice (Basmati)",
    "Grains & Cereals",
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    [
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 5, unit: "kg", label: "5 kg" },
      { value: 10, unit: "kg", label: "10 kg" },
    ],
    "1 kg",
    (qty) => {
      const multiplier = qty === "5 kg" ? 5 : qty === "10 kg" ? 10 : 1;
      return Math.round(150 * multiplier);
    }
  ),
  createProduct(
    "grain-wheat-flour",
    "Wheat Flour (Atta)",
    "Grains & Cereals",
    "https://images.unsplash.com/photo-1595855759920-86582396756a?w=400&h=400&fit=crop",
    [
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 5, unit: "kg", label: "5 kg" },
      { value: 10, unit: "kg", label: "10 kg" },
    ],
    "5 kg",
    (qty) => {
      const multiplier = qty === "1 kg" ? 1 : qty === "10 kg" ? 10 : 5;
      return Math.round(50 * multiplier);
    }
  ),
  createProduct(
    "grain-rava",
    "Rava (Suji/Semolina)",
    "Grains & Cereals",
    "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(40 * multiplier);
    }
  ),
  createProduct(
    "grain-poha",
    "Poha (Flattened Rice)",
    "Grains & Cereals",
    "https://images.unsplash.com/photo-1626789037484-98487c8ff09b?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(45 * multiplier);
    }
  ),
  createProduct(
    "grain-vermicelli",
    "Vermicelli (Seviyan)",
    "Grains & Cereals",
    "https://images.unsplash.com/photo-1612165638932-4bb89c3e2e7b?w=400&h=400&fit=crop",
    [
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "200 g",
    (qty) => {
      const multiplier = qty === "500 g" ? 2.5 : 1;
      return Math.round(30 * multiplier);
    }
  ),
  createProduct(
    "grain-oats",
    "Oats",
    "Grains & Cereals",
    "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(100 * multiplier);
    }
  ),
  createProduct(
    "pulse-toor-dal",
    "Toor Dal (Arhar)",
    "Pulses & Legumes",
    "https://images.unsplash.com/photo-1596040033229-a0b3b46fe6b6?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(90 * multiplier);
    }
  ),
  createProduct(
    "pulse-moong-dal",
    "Moong Dal",
    "Pulses & Legumes",
    "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(95 * multiplier);
    }
  ),
  createProduct(
    "pulse-chana-dal",
    "Chana Dal",
    "Pulses & Legumes",
    "https://images.unsplash.com/photo-1610277680734-8f1b5eb49cbd?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(85 * multiplier);
    }
  ),
  createProduct(
    "pulse-urad-dal",
    "Urad Dal",
    "Pulses & Legumes",
    "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(100 * multiplier);
    }
  ),
  createProduct(
    "pulse-masoor-dal",
    "Masoor Dal",
    "Pulses & Legumes",
    "https://images.unsplash.com/photo-1610277680734-8f1b5eb49cbd?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(80 * multiplier);
    }
  ),
  createProduct(
    "pulse-chickpeas",
    "Chickpeas (Kabuli Chana)",
    "Pulses & Legumes",
    "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(95 * multiplier);
    }
  ),
  createProduct(
    "pulse-rajma",
    "Rajma (Kidney Beans)",
    "Pulses & Legumes",
    "https://images.unsplash.com/photo-1596040033229-a0b3b46fe6b6?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(110 * multiplier);
    }
  ),
  createProduct(
    "oil-sunflower",
    "Sunflower Oil",
    "Oils & Ghee",
    "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    [
      { value: 1, unit: "l", label: "1 liter" },
      { value: 2, unit: "l", label: "2 liters" },
      { value: 5, unit: "l", label: "5 liters" },
    ],
    "1 liter",
    (qty) => {
      const multiplier = qty === "2 liters" ? 2 : qty === "5 liters" ? 5 : 1;
      return Math.round(140 * multiplier);
    }
  ),
  createProduct(
    "oil-groundnut",
    "Groundnut Oil",
    "Oils & Ghee",
    "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    [
      { value: 1, unit: "l", label: "1 liter" },
      { value: 2, unit: "l", label: "2 liters" },
    ],
    "1 liter",
    (qty) => {
      const multiplier = qty === "2 liters" ? 2 : 1;
      return Math.round(200 * multiplier);
    }
  ),
  createProduct(
    "oil-mustard",
    "Mustard Oil",
    "Oils & Ghee",
    "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "ml", label: "500 ml" },
      { value: 1, unit: "l", label: "1 liter" },
    ],
    "1 liter",
    (qty) => {
      const multiplier = qty === "500 ml" ? 0.5 : 1;
      return Math.round(180 * multiplier);
    }
  ),
  createProduct(
    "oil-olive",
    "Olive Oil",
    "Oils & Ghee",
    "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    [
      { value: 250, unit: "ml", label: "250 ml" },
      { value: 500, unit: "ml", label: "500 ml" },
      { value: 1, unit: "l", label: "1 liter" },
    ],
    "500 ml",
    (qty) => {
      const multiplier = qty === "250 ml" ? 0.25 : qty === "1 liter" ? 1 : 0.5;
      return Math.round(600 * multiplier);
    }
  ),
  createProduct(
    "oil-ghee",
    "Ghee",
    "Oils & Ghee",
    "https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "ml", label: "500 ml" },
      { value: 1, unit: "l", label: "1 liter" },
    ],
    "500 ml",
    (qty) => {
      const multiplier = qty === "1 liter" ? 2 : 1;
      return Math.round(300 * multiplier);
    }
  ),
  createProduct(
    "spice-salt",
    "Salt (Iodised)",
    "Spices",
    "https://images.unsplash.com/photo-1612165638932-4bb89c3e2e7b?w=400&h=400&fit=crop",
    [{ value: 1, unit: "kg", label: "1 kg" }],
    "1 kg",
    () => 22
  ),
  createProduct(
    "spice-turmeric",
    "Turmeric Powder",
    "Spices",
    "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    [
      { value: 100, unit: "g", label: "100 g" },
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "100 g",
    (qty) => {
      const multiplier = qty === "200 g" ? 2 : qty === "500 g" ? 5 : 1;
      return Math.round(30 * multiplier);
    }
  ),
  createProduct(
    "spice-red-chili",
    "Red Chili Powder",
    "Spices",
    "https://images.unsplash.com/photo-1583700039584-a4f0c1bd0ba5?w=400&h=400&fit=crop",
    [
      { value: 100, unit: "g", label: "100 g" },
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "100 g",
    (qty) => {
      const multiplier = qty === "200 g" ? 2 : qty === "500 g" ? 5 : 1;
      return Math.round(35 * multiplier);
    }
  ),
  createProduct(
    "spice-coriander",
    "Coriander Powder",
    "Spices",
    "https://images.unsplash.com/photo-1596040033229-a0b3b46fe6b6?w=400&h=400&fit=crop",
    [
      { value: 100, unit: "g", label: "100 g" },
      { value: 200, unit: "g", label: "200 g" },
    ],
    "100 g",
    (qty) => {
      const multiplier = qty === "200 g" ? 2 : 1;
      return Math.round(30 * multiplier);
    }
  ),
  createProduct(
    "spice-garam-masala",
    "Garam Masala",
    "Spices",
    "https://images.unsplash.com/photo-1596040033229-a0b3b46fe6b6?w=400&h=400&fit=crop",
    [
      { value: 50, unit: "g", label: "50 g" },
      { value: 100, unit: "g", label: "100 g" },
    ],
    "50 g",
    (qty) => {
      const multiplier = qty === "100 g" ? 2 : 1;
      return Math.round(40 * multiplier);
    }
  ),
  createProduct(
    "spice-cumin",
    "Cumin Seeds (Jeera)",
    "Spices",
    "https://images.unsplash.com/photo-1596040033229-a0b3b46fe6b6?w=400&h=400&fit=crop",
    [
      { value: 100, unit: "g", label: "100 g" },
      { value: 200, unit: "g", label: "200 g" },
    ],
    "100 g",
    (qty) => {
      const multiplier = qty === "200 g" ? 2 : 1;
      return Math.round(50 * multiplier);
    }
  ),
  createProduct(
    "spice-mustard-seeds",
    "Mustard Seeds",
    "Spices",
    "https://images.unsplash.com/photo-1596040033229-a0b3b46fe6b6?w=400&h=400&fit=crop",
    [
      { value: 100, unit: "g", label: "100 g" },
      { value: 200, unit: "g", label: "200 g" },
    ],
    "100 g",
    (qty) => {
      const multiplier = qty === "200 g" ? 2 : 1;
      return Math.round(35 * multiplier);
    }
  ),
  createProduct(
    "dairy-milk",
    "Milk (Toned)",
    "Dairy & Eggs",
    "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "ml", label: "500 ml" },
      { value: 1, unit: "l", label: "1 liter" },
    ],
    "500 ml",
    (qty) => {
      const multiplier = qty === "1 liter" ? 2 : 1;
      return Math.round(28 * multiplier);
    }
  ),
  createProduct(
    "dairy-curd",
    "Curd (Dahi)",
    "Dairy & Eggs",
    "https://images.unsplash.com/photo-1581548919774-ca8ab8ece2e0?w=400&h=400&fit=crop",
    [
      { value: 200, unit: "g", label: "200 g" },
      { value: 400, unit: "g", label: "400 g" },
    ],
    "400 g",
    (qty) => {
      const multiplier = qty === "400 g" ? 2 : 1;
      return Math.round(25 * multiplier);
    }
  ),
  createProduct(
    "dairy-paneer",
    "Paneer",
    "Dairy & Eggs",
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop",
    [
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "200 g",
    (qty) => {
      const multiplier = qty === "500 g" ? 2.5 : 1;
      return Math.round(90 * multiplier);
    }
  ),
  createProduct(
    "dairy-butter",
    "Butter",
    "Dairy & Eggs",
    "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop",
    [
      { value: 100, unit: "g", label: "100 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "100 g",
    (qty) => {
      const multiplier = qty === "500 g" ? 5 : 1;
      return Math.round(55 * multiplier);
    }
  ),
  createProduct(
    "dairy-cheese",
    "Cheese",
    "Dairy & Eggs",
    "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop",
    [
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "200 g",
    (qty) => {
      const multiplier = qty === "500 g" ? 2.5 : 1;
      return Math.round(120 * multiplier);
    }
  ),
  createProduct(
    "dairy-eggs",
    "Eggs",
    "Dairy & Eggs",
    "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
    [
      { value: 6, unit: "piece", label: "6 pieces" },
      { value: 1, unit: "dozen", label: "1 dozen" },
      { value: 30, unit: "piece", label: "30 pieces" },
    ],
    "1 dozen",
    (qty) => {
      const multiplier = qty === "6 pieces" ? 0.5 : qty === "30 pieces" ? 2.5 : 1;
      return Math.round(60 * multiplier);
    }
  ),
  createProduct(
    "meat-chicken",
    "Chicken (Curry Cut)",
    "Meat & Seafood",
    "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(150 * multiplier);
    }
  ),
  createProduct(
    "meat-mutton",
    "Mutton (Curry Cut)",
    "Meat & Seafood",
    "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(400 * multiplier);
    }
  ),
  createProduct(
    "meat-fish",
    "Fish (Pomfret)",
    "Meat & Seafood",
    "https://images.unsplash.com/photo-1574781330855-d0db5cc6c2e9?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(250 * multiplier);
    }
  ),
  createProduct(
    "meat-prawns",
    "Prawns",
    "Meat & Seafood",
    "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=400&fit=crop",
    [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "250 g",
    (qty) => {
      const multiplier = qty === "500 g" ? 2 : 1;
      return Math.round(300 * multiplier);
    }
  ),
  createProduct(
    "bev-tea",
    "Tea Powder",
    "Beverages",
    "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=400&fit=crop",
    [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "250 g",
    (qty) => {
      const multiplier = qty === "500 g" ? 2 : qty === "1 kg" ? 4 : 1;
      return Math.round(100 * multiplier);
    }
  ),
  createProduct(
    "bev-coffee",
    "Coffee Powder",
    "Beverages",
    "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=400&h=400&fit=crop",
    [
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "200 g",
    (qty) => {
      const multiplier = qty === "500 g" ? 2.5 : 1;
      return Math.round(150 * multiplier);
    }
  ),
  createProduct(
    "bev-green-tea",
    "Green Tea",
    "Beverages",
    "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop",
    [
      { value: 100, unit: "g", label: "100 g" },
      { value: 250, unit: "g", label: "250 g" },
    ],
    "100 g",
    (qty) => {
      const multiplier = qty === "250 g" ? 2.5 : 1;
      return Math.round(120 * multiplier);
    }
  ),
  createProduct(
    "food-bread",
    "Bread",
    "Packaged Foods",
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    [{ value: 400, unit: "g", label: "400 g" }],
    "400 g",
    () => 35
  ),
  createProduct(
    "food-biscuits",
    "Biscuits",
    "Packaged Foods",
    "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
    [
      { value: 200, unit: "g", label: "200 g" },
      { value: 400, unit: "g", label: "400 g" },
    ],
    "200 g",
    (qty) => {
      const multiplier = qty === "400 g" ? 2 : 1;
      return Math.round(40 * multiplier);
    }
  ),
  createProduct(
    "food-noodles",
    "Instant Noodles",
    "Packaged Foods",
    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop",
    [
      { value: 280, unit: "g", label: "280 g (4 pack)" },
      { value: 560, unit: "g", label: "560 g (8 pack)" },
    ],
    "280 g (4 pack)",
    (qty) => {
      const multiplier = qty === "560 g (8 pack)" ? 2 : 1;
      return Math.round(60 * multiplier);
    }
  ),
  createProduct(
    "food-pasta",
    "Pasta",
    "Packaged Foods",
    "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop",
    [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "250 g",
    (qty) => {
      const multiplier = qty === "500 g" ? 2 : 1;
      return Math.round(70 * multiplier);
    }
  ),
  createProduct(
    "food-ketchup",
    "Tomato Ketchup",
    "Packaged Foods",
    "https://images.unsplash.com/photo-1597040653106-c5688478e983?w=400&h=400&fit=crop",
    [
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "200 g" ? 0.4 : 1;
      return Math.round(100 * multiplier);
    }
  ),
  createProduct(
    "food-soy-sauce",
    "Soy Sauce",
    "Packaged Foods",
    "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    [
      { value: 200, unit: "ml", label: "200 ml" },
      { value: 500, unit: "ml", label: "500 ml" },
    ],
    "200 ml",
    (qty) => {
      const multiplier = qty === "500 ml" ? 2.5 : 1;
      return Math.round(80 * multiplier);
    }
  ),
  createProduct(
    "food-jam",
    "Mixed Fruit Jam",
    "Packaged Foods",
    "https://images.unsplash.com/photo-1621953092357-35d8d5ac0f90?w=400&h=400&fit=crop",
    [
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    "200 g",
    (qty) => {
      const multiplier = qty === "500 g" ? 2.5 : 1;
      return Math.round(90 * multiplier);
    }
  ),
  createProduct(
    "food-sugar",
    "Sugar",
    "Packaged Foods",
    "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400&h=400&fit=crop",
    [
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 5, unit: "kg", label: "5 kg" },
    ],
    "1 kg",
    (qty) => {
      const multiplier = qty === "5 kg" ? 5 : 1;
      return Math.round(45 * multiplier);
    }
  ),
  createProduct(
    "food-jaggery",
    "Jaggery (Gur)",
    "Packaged Foods",
    "https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    "500 g",
    (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return Math.round(60 * multiplier);
    }
  ),
  createProduct(
    "house-washing-powder",
    "Washing Powder",
    "Household Items",
    "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop",
    [
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 2, unit: "kg", label: "2 kg" },
    ],
    "1 kg",
    (qty) => {
      const multiplier = qty === "2 kg" ? 2 : 1;
      return Math.round(150 * multiplier);
    }
  ),
  createProduct(
    "house-soap",
    "Bathing Soap",
    "Household Items",
    "https://images.unsplash.com/photo-1600857544200-242c63d3915d?w=400&h=400&fit=crop",
    [
      { value: 125, unit: "g", label: "125 g" },
      { value: 3, unit: "piece", label: "3 pieces" },
    ],
    "125 g",
    (qty) => {
      const multiplier = qty === "3 pieces" ? 3 : 1;
      return Math.round(30 * multiplier);
    }
  ),
  createProduct(
    "house-dishwash",
    "Dishwashing Liquid",
    "Household Items",
    "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "ml", label: "500 ml" },
      { value: 1, unit: "l", label: "1 liter" },
    ],
    "500 ml",
    (qty) => {
      const multiplier = qty === "1 liter" ? 2 : 1;
      return Math.round(120 * multiplier);
    }
  ),
  createProduct(
    "house-toilet-cleaner",
    "Toilet Cleaner",
    "Household Items",
    "https://images.unsplash.com/photo-1584996900692-cd0cf2a0928e?w=400&h=400&fit=crop",
    [
      { value: 500, unit: "ml", label: "500 ml" },
      { value: 1, unit: "l", label: "1 liter" },
    ],
    "500 ml",
    (qty) => {
      const multiplier = qty === "1 liter" ? 2 : 1;
      return Math.round(100 * multiplier);
    }
  ),
  createProduct(
    "house-shampoo",
    "Shampoo",
    "Household Items",
    "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=400&fit=crop",
    [
      { value: 180, unit: "ml", label: "180 ml" },
      { value: 340, unit: "ml", label: "340 ml" },
      { value: 650, unit: "ml", label: "650 ml" },
    ],
    "340 ml",
    (qty) => {
      const multiplier = qty === "180 ml" ? 0.5 : qty === "650 ml" ? 2 : 1;
      return Math.round(180 * multiplier);
    }
  ),
  createProduct(
    "house-toothpaste",
    "Toothpaste",
    "Household Items",
    "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=400&h=400&fit=crop",
    [
      { value: 100, unit: "g", label: "100 g" },
      { value: 200, unit: "g", label: "200 g" },
    ],
    "100 g",
    (qty) => {
      const multiplier = qty === "200 g" ? 2 : 1;
      return Math.round(60 * multiplier);
    }
  ),
];
