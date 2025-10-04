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
const generatePrices = (basePrice: number): PlatformPrice[] => [
  {
    platform: "Zepto",
    price: basePrice + Math.floor(Math.random() * 5),
    originalPrice: basePrice + Math.floor(Math.random() * 5) + 5,
    deliveryTime: "10 min",
    inStock: Math.random() > 0.1,
    url: "#",
  },
  {
    platform: "Blinkit",
    price: basePrice + Math.floor(Math.random() * 4),
    deliveryTime: "15 min",
    inStock: Math.random() > 0.1,
    url: "#",
  },
  {
    platform: "BigBasket",
    price: basePrice + Math.floor(Math.random() * 6),
    deliveryTime: "2 hours",
    inStock: Math.random() > 0.05,
    url: "#",
  },
  {
    platform: "Swiggy",
    price: basePrice + Math.floor(Math.random() * 7),
    deliveryTime: "20 min",
    inStock: Math.random() > 0.15,
    url: "#",
  },
];

export const products: Product[] = [
  // Vegetables
  {
    id: "veg-potato",
    name: "Potato",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 2, unit: "kg", label: "2 kg" },
      { value: 5, unit: "kg", label: "5 kg" },
    ],
    defaultQuantity: "1 kg",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 0.5 : qty === "2 kg" ? 2 : qty === "5 kg" ? 5 : 1;
      return generatePrices(Math.round(30 * multiplier));
    },
  },
  {
    id: "veg-onion",
    name: "Onion",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 2, unit: "kg", label: "2 kg" },
    ],
    defaultQuantity: "1 kg",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 0.5 : qty === "2 kg" ? 2 : 1;
      return generatePrices(Math.round(35 * multiplier));
    },
  },
  {
    id: "veg-tomato",
    name: "Tomato",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "250 g" ? 0.25 : qty === "1 kg" ? 1 : 0.5;
      return generatePrices(Math.round(40 * multiplier));
    },
  },
  {
    id: "veg-carrot",
    name: "Carrot",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "250 g" ? 0.25 : qty === "1 kg" ? 1 : 0.5;
      return generatePrices(Math.round(50 * multiplier));
    },
  },
  {
    id: "veg-beans",
    name: "Green Beans",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1591868405957-51e0d0c3d6fc?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "250 g",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 2 : 1;
      return generatePrices(Math.round(25 * multiplier));
    },
  },
  {
    id: "veg-cauliflower",
    name: "Cauliflower",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1568584711271-81084c07d2b4?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 1, unit: "piece", label: "1 piece" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "1 piece",
    getPrices: () => generatePrices(40),
  },
  {
    id: "veg-cabbage",
    name: "Cabbage",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 1, unit: "piece", label: "1 piece" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "1 piece",
    getPrices: () => generatePrices(35),
  },
  {
    id: "veg-brinjal",
    name: "Brinjal (Eggplant)",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1659261200833-ec993db3d6e0?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "250 g",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 2 : 1;
      return generatePrices(Math.round(20 * multiplier));
    },
  },
  {
    id: "veg-green-chili",
    name: "Green Chilies",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1583700039584-a4f0c1bd0ba5?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 100, unit: "g", label: "100 g" },
      { value: 250, unit: "g", label: "250 g" },
    ],
    defaultQuantity: "100 g",
    getPrices: (qty) => {
      const multiplier = qty === "250 g" ? 2.5 : 1;
      return generatePrices(Math.round(10 * multiplier));
    },
  },
  {
    id: "veg-spinach",
    name: "Spinach (Palak)",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "250 g",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 2 : 1;
      return generatePrices(Math.round(20 * multiplier));
    },
  },
  {
    id: "veg-capsicum",
    name: "Capsicum (Bell Pepper)",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "250 g",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 2 : 1;
      return generatePrices(Math.round(35 * multiplier));
    },
  },
  {
    id: "veg-garlic",
    name: "Garlic",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1619514430739-94b131d9b9d8?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 100, unit: "g", label: "100 g" },
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "100 g",
    getPrices: (qty) => {
      const multiplier = qty === "100 g" ? 1 : qty === "250 g" ? 2.5 : 5;
      return generatePrices(Math.round(20 * multiplier));
    },
  },
  {
    id: "veg-ginger",
    name: "Ginger",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 100, unit: "g", label: "100 g" },
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "100 g",
    getPrices: (qty) => {
      const multiplier = qty === "100 g" ? 1 : qty === "250 g" ? 2.5 : 5;
      return generatePrices(Math.round(25 * multiplier));
    },
  },

  // Fruits
  {
    id: "fruit-apple",
    name: "Apple",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 2, unit: "kg", label: "2 kg" },
    ],
    defaultQuantity: "1 kg",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 0.5 : qty === "2 kg" ? 2 : 1;
      return generatePrices(Math.round(160 * multiplier));
    },
  },
  {
    id: "fruit-banana",
    name: "Banana",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 1, unit: "dozen", label: "1 dozen" },
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "1 dozen",
    getPrices: () => generatePrices(50),
  },
  {
    id: "fruit-orange",
    name: "Orange",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(50 * multiplier));
    },
  },
  {
    id: "fruit-grapes",
    name: "Grapes",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1599819177841-6f816438e74a?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "250 g" ? 0.25 : qty === "1 kg" ? 1 : 0.5;
      return generatePrices(Math.round(140 * multiplier));
    },
  },
  {
    id: "fruit-mango",
    name: "Mango",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 2, unit: "kg", label: "2 kg" },
    ],
    defaultQuantity: "1 kg",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 0.5 : qty === "2 kg" ? 2 : 1;
      return generatePrices(Math.round(120 * multiplier));
    },
  },
  {
    id: "fruit-papaya",
    name: "Papaya",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 1, unit: "piece", label: "1 piece" },
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "1 piece",
    getPrices: () => generatePrices(40),
  },
  {
    id: "fruit-pomegranate",
    name: "Pomegranate",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1589458431969-2e0769d9b9f1?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 1, unit: "piece", label: "1 piece" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "1 piece",
    getPrices: () => generatePrices(70),
  },
  {
    id: "fruit-lemon",
    name: "Lemon",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 100, unit: "g", label: "100 g" },
      { value: 250, unit: "g", label: "250 g" },
    ],
    defaultQuantity: "100 g",
    getPrices: (qty) => {
      const multiplier = qty === "250 g" ? 2.5 : 1;
      return generatePrices(Math.round(10 * multiplier));
    },
  },

  // Grains & Cereals
  {
    id: "grain-rice",
    name: "Rice (Basmati)",
    category: "Grains & Cereals",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 5, unit: "kg", label: "5 kg" },
      { value: 10, unit: "kg", label: "10 kg" },
    ],
    defaultQuantity: "1 kg",
    getPrices: (qty) => {
      const multiplier = qty === "5 kg" ? 5 : qty === "10 kg" ? 10 : 1;
      return generatePrices(Math.round(150 * multiplier));
    },
  },
  {
    id: "grain-wheat-flour",
    name: "Wheat Flour (Atta)",
    category: "Grains & Cereals",
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 5, unit: "kg", label: "5 kg" },
      { value: 10, unit: "kg", label: "10 kg" },
    ],
    defaultQuantity: "5 kg",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 1 : qty === "10 kg" ? 10 : 5;
      return generatePrices(Math.round(50 * multiplier));
    },
  },
  {
    id: "grain-rava",
    name: "Rava (Suji/Semolina)",
    category: "Grains & Cereals",
    image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(40 * multiplier));
    },
  },
  {
    id: "grain-poha",
    name: "Poha (Flattened Rice)",
    category: "Grains & Cereals",
    image: "https://images.unsplash.com/photo-1626789037484-98487c8ff09b?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(45 * multiplier));
    },
  },
  {
    id: "grain-vermicelli",
    name: "Vermicelli (Seviyan)",
    category: "Grains & Cereals",
    image: "https://images.unsplash.com/photo-1612165638932-4bb89c3e2e7b?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "200 g",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 2.5 : 1;
      return generatePrices(Math.round(30 * multiplier));
    },
  },
  {
    id: "grain-oats",
    name: "Oats",
    category: "Grains & Cereals",
    image: "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(100 * multiplier));
    },
  },

  // Pulses & Legumes
  {
    id: "pulse-toor-dal",
    name: "Toor Dal (Arhar)",
    category: "Pulses & Legumes",
    image: "https://images.unsplash.com/photo-1596040033229-a0b3b46fe6b6?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(90 * multiplier));
    },
  },
  {
    id: "pulse-moong-dal",
    name: "Moong Dal",
    category: "Pulses & Legumes",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(95 * multiplier));
    },
  },
  {
    id: "pulse-chana-dal",
    name: "Chana Dal",
    category: "Pulses & Legumes",
    image: "https://images.unsplash.com/photo-1610277680734-8f1b5eb49cbd?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(85 * multiplier));
    },
  },
  {
    id: "pulse-urad-dal",
    name: "Urad Dal",
    category: "Pulses & Legumes",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(100 * multiplier));
    },
  },
  {
    id: "pulse-masoor-dal",
    name: "Masoor Dal",
    category: "Pulses & Legumes",
    image: "https://images.unsplash.com/photo-1610277680734-8f1b5eb49cbd?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(80 * multiplier));
    },
  },
  {
    id: "pulse-chickpeas",
    name: "Chickpeas (Kabuli Chana)",
    category: "Pulses & Legumes",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(95 * multiplier));
    },
  },
  {
    id: "pulse-rajma",
    name: "Rajma (Kidney Beans)",
    category: "Pulses & Legumes",
    image: "https://images.unsplash.com/photo-1596040033229-a0b3b46fe6b6?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(110 * multiplier));
    },
  },

  // Oils & Ghee
  {
    id: "oil-sunflower",
    name: "Sunflower Oil",
    category: "Oils & Ghee",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 1, unit: "l", label: "1 liter" },
      { value: 2, unit: "l", label: "2 liters" },
      { value: 5, unit: "l", label: "5 liters" },
    ],
    defaultQuantity: "1 liter",
    getPrices: (qty) => {
      const multiplier = qty === "2 liters" ? 2 : qty === "5 liters" ? 5 : 1;
      return generatePrices(Math.round(140 * multiplier));
    },
  },
  {
    id: "oil-groundnut",
    name: "Groundnut Oil",
    category: "Oils & Ghee",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 1, unit: "l", label: "1 liter" },
      { value: 2, unit: "l", label: "2 liters" },
    ],
    defaultQuantity: "1 liter",
    getPrices: (qty) => {
      const multiplier = qty === "2 liters" ? 2 : 1;
      return generatePrices(Math.round(200 * multiplier));
    },
  },
  {
    id: "oil-mustard",
    name: "Mustard Oil",
    category: "Oils & Ghee",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "ml", label: "500 ml" },
      { value: 1, unit: "l", label: "1 liter" },
    ],
    defaultQuantity: "1 liter",
    getPrices: (qty) => {
      const multiplier = qty === "500 ml" ? 0.5 : 1;
      return generatePrices(Math.round(180 * multiplier));
    },
  },
  {
    id: "oil-olive",
    name: "Olive Oil",
    category: "Oils & Ghee",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 250, unit: "ml", label: "250 ml" },
      { value: 500, unit: "ml", label: "500 ml" },
      { value: 1, unit: "l", label: "1 liter" },
    ],
    defaultQuantity: "500 ml",
    getPrices: (qty) => {
      const multiplier = qty === "250 ml" ? 0.25 : qty === "1 liter" ? 1 : 0.5;
      return generatePrices(Math.round(600 * multiplier));
    },
  },
  {
    id: "oil-ghee",
    name: "Ghee",
    category: "Oils & Ghee",
    image: "https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "ml", label: "500 ml" },
      { value: 1, unit: "l", label: "1 liter" },
    ],
    defaultQuantity: "500 ml",
    getPrices: (qty) => {
      const multiplier = qty === "1 liter" ? 2 : 1;
      return generatePrices(Math.round(300 * multiplier));
    },
  },

  // Spices
  {
    id: "spice-salt",
    name: "Salt (Iodised)",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1612165638932-4bb89c3e2e7b?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "1 kg",
    getPrices: () => generatePrices(22),
  },
  {
    id: "spice-turmeric",
    name: "Turmeric Powder",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 100, unit: "g", label: "100 g" },
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "100 g",
    getPrices: (qty) => {
      const multiplier = qty === "200 g" ? 2 : qty === "500 g" ? 5 : 1;
      return generatePrices(Math.round(30 * multiplier));
    },
  },
  {
    id: "spice-red-chili",
    name: "Red Chili Powder",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1583700039584-a4f0c1bd0ba5?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 100, unit: "g", label: "100 g" },
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "100 g",
    getPrices: (qty) => {
      const multiplier = qty === "200 g" ? 2 : qty === "500 g" ? 5 : 1;
      return generatePrices(Math.round(35 * multiplier));
    },
  },
  {
    id: "spice-coriander",
    name: "Coriander Powder",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a0b3b46fe6b6?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 100, unit: "g", label: "100 g" },
      { value: 200, unit: "g", label: "200 g" },
    ],
    defaultQuantity: "100 g",
    getPrices: (qty) => {
      const multiplier = qty === "200 g" ? 2 : 1;
      return generatePrices(Math.round(30 * multiplier));
    },
  },
  {
    id: "spice-garam-masala",
    name: "Garam Masala",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a0b3b46fe6b6?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 50, unit: "g", label: "50 g" },
      { value: 100, unit: "g", label: "100 g" },
    ],
    defaultQuantity: "50 g",
    getPrices: (qty) => {
      const multiplier = qty === "100 g" ? 2 : 1;
      return generatePrices(Math.round(40 * multiplier));
    },
  },
  {
    id: "spice-cumin",
    name: "Cumin Seeds (Jeera)",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a0b3b46fe6b6?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 100, unit: "g", label: "100 g" },
      { value: 200, unit: "g", label: "200 g" },
    ],
    defaultQuantity: "100 g",
    getPrices: (qty) => {
      const multiplier = qty === "200 g" ? 2 : 1;
      return generatePrices(Math.round(50 * multiplier));
    },
  },
  {
    id: "spice-mustard-seeds",
    name: "Mustard Seeds",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a0b3b46fe6b6?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 100, unit: "g", label: "100 g" },
      { value: 200, unit: "g", label: "200 g" },
    ],
    defaultQuantity: "100 g",
    getPrices: (qty) => {
      const multiplier = qty === "200 g" ? 2 : 1;
      return generatePrices(Math.round(35 * multiplier));
    },
  },

  // Dairy & Eggs
  {
    id: "dairy-milk",
    name: "Milk (Toned)",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "ml", label: "500 ml" },
      { value: 1, unit: "l", label: "1 liter" },
    ],
    defaultQuantity: "500 ml",
    getPrices: (qty) => {
      const multiplier = qty === "1 liter" ? 2 : 1;
      return generatePrices(Math.round(28 * multiplier));
    },
  },
  {
    id: "dairy-curd",
    name: "Curd (Dahi)",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1581548919774-ca8ab8ece2e0?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 200, unit: "g", label: "200 g" },
      { value: 400, unit: "g", label: "400 g" },
    ],
    defaultQuantity: "400 g",
    getPrices: (qty) => {
      const multiplier = qty === "400 g" ? 2 : 1;
      return generatePrices(Math.round(25 * multiplier));
    },
  },
  {
    id: "dairy-paneer",
    name: "Paneer",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "200 g",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 2.5 : 1;
      return generatePrices(Math.round(90 * multiplier));
    },
  },
  {
    id: "dairy-butter",
    name: "Butter",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 100, unit: "g", label: "100 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "100 g",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 5 : 1;
      return generatePrices(Math.round(55 * multiplier));
    },
  },
  {
    id: "dairy-cheese",
    name: "Cheese",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "200 g",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 2.5 : 1;
      return generatePrices(Math.round(120 * multiplier));
    },
  },
  {
    id: "dairy-eggs",
    name: "Eggs",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 6, unit: "piece", label: "6 pieces" },
      { value: 1, unit: "dozen", label: "1 dozen" },
      { value: 30, unit: "piece", label: "30 pieces" },
    ],
    defaultQuantity: "1 dozen",
    getPrices: (qty) => {
      const multiplier = qty === "6 pieces" ? 0.5 : qty === "30 pieces" ? 2.5 : 1;
      return generatePrices(Math.round(60 * multiplier));
    },
  },

  // Meat & Seafood
  {
    id: "meat-chicken",
    name: "Chicken (Curry Cut)",
    category: "Meat & Seafood",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(150 * multiplier));
    },
  },
  {
    id: "meat-mutton",
    name: "Mutton (Curry Cut)",
    category: "Meat & Seafood",
    image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(400 * multiplier));
    },
  },
  {
    id: "meat-fish",
    name: "Fish (Pomfret)",
    category: "Meat & Seafood",
    image: "https://images.unsplash.com/photo-1574781330855-d0db5cc6c2e9?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(250 * multiplier));
    },
  },
  {
    id: "meat-prawns",
    name: "Prawns",
    category: "Meat & Seafood",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "250 g",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 2 : 1;
      return generatePrices(Math.round(300 * multiplier));
    },
  },

  // Beverages
  {
    id: "bev-tea",
    name: "Tea Powder",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "250 g",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 2 : qty === "1 kg" ? 4 : 1;
      return generatePrices(Math.round(100 * multiplier));
    },
  },
  {
    id: "bev-coffee",
    name: "Coffee Powder",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "200 g",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 2.5 : 1;
      return generatePrices(Math.round(150 * multiplier));
    },
  },
  {
    id: "bev-green-tea",
    name: "Green Tea",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 100, unit: "g", label: "100 g" },
      { value: 250, unit: "g", label: "250 g" },
    ],
    defaultQuantity: "100 g",
    getPrices: (qty) => {
      const multiplier = qty === "250 g" ? 2.5 : 1;
      return generatePrices(Math.round(120 * multiplier));
    },
  },

  // Packaged Foods
  {
    id: "food-bread",
    name: "Bread",
    category: "Packaged Foods",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 400, unit: "g", label: "400 g" },
    ],
    defaultQuantity: "400 g",
    getPrices: () => generatePrices(35),
  },
  {
    id: "food-biscuits",
    name: "Biscuits",
    category: "Packaged Foods",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 200, unit: "g", label: "200 g" },
      { value: 400, unit: "g", label: "400 g" },
    ],
    defaultQuantity: "200 g",
    getPrices: (qty) => {
      const multiplier = qty === "400 g" ? 2 : 1;
      return generatePrices(Math.round(40 * multiplier));
    },
  },
  {
    id: "food-noodles",
    name: "Instant Noodles",
    category: "Packaged Foods",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 280, unit: "g", label: "280 g (4 pack)" },
      { value: 560, unit: "g", label: "560 g (8 pack)" },
    ],
    defaultQuantity: "280 g (4 pack)",
    getPrices: (qty) => {
      const multiplier = qty === "560 g (8 pack)" ? 2 : 1;
      return generatePrices(Math.round(60 * multiplier));
    },
  },
  {
    id: "food-pasta",
    name: "Pasta",
    category: "Packaged Foods",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 250, unit: "g", label: "250 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "250 g",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 2 : 1;
      return generatePrices(Math.round(70 * multiplier));
    },
  },
  {
    id: "food-ketchup",
    name: "Tomato Ketchup",
    category: "Packaged Foods",
    image: "https://images.unsplash.com/photo-1597040653106-c5688478e983?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "200 g" ? 0.4 : 1;
      return generatePrices(Math.round(100 * multiplier));
    },
  },
  {
    id: "food-soy-sauce",
    name: "Soy Sauce",
    category: "Packaged Foods",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 200, unit: "ml", label: "200 ml" },
      { value: 500, unit: "ml", label: "500 ml" },
    ],
    defaultQuantity: "200 ml",
    getPrices: (qty) => {
      const multiplier = qty === "500 ml" ? 2.5 : 1;
      return generatePrices(Math.round(80 * multiplier));
    },
  },
  {
    id: "food-jam",
    name: "Mixed Fruit Jam",
    category: "Packaged Foods",
    image: "https://images.unsplash.com/photo-1621953092357-35d8d5ac0f90?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 200, unit: "g", label: "200 g" },
      { value: 500, unit: "g", label: "500 g" },
    ],
    defaultQuantity: "200 g",
    getPrices: (qty) => {
      const multiplier = qty === "500 g" ? 2.5 : 1;
      return generatePrices(Math.round(90 * multiplier));
    },
  },
  {
    id: "food-sugar",
    name: "Sugar",
    category: "Packaged Foods",
    image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 5, unit: "kg", label: "5 kg" },
    ],
    defaultQuantity: "1 kg",
    getPrices: (qty) => {
      const multiplier = qty === "5 kg" ? 5 : 1;
      return generatePrices(Math.round(45 * multiplier));
    },
  },
  {
    id: "food-jaggery",
    name: "Jaggery (Gur)",
    category: "Packaged Foods",
    image: "https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "g", label: "500 g" },
      { value: 1, unit: "kg", label: "1 kg" },
    ],
    defaultQuantity: "500 g",
    getPrices: (qty) => {
      const multiplier = qty === "1 kg" ? 2 : 1;
      return generatePrices(Math.round(60 * multiplier));
    },
  },

  // Household Items
  {
    id: "house-washing-powder",
    name: "Washing Powder",
    category: "Household Items",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 1, unit: "kg", label: "1 kg" },
      { value: 2, unit: "kg", label: "2 kg" },
    ],
    defaultQuantity: "1 kg",
    getPrices: (qty) => {
      const multiplier = qty === "2 kg" ? 2 : 1;
      return generatePrices(Math.round(150 * multiplier));
    },
  },
  {
    id: "house-soap",
    name: "Bathing Soap",
    category: "Household Items",
    image: "https://images.unsplash.com/photo-1600857544200-242c63d3915d?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 125, unit: "g", label: "125 g" },
      { value: 3, unit: "piece", label: "3 pieces" },
    ],
    defaultQuantity: "125 g",
    getPrices: (qty) => {
      const multiplier = qty === "3 pieces" ? 3 : 1;
      return generatePrices(Math.round(30 * multiplier));
    },
  },
  {
    id: "house-dishwash",
    name: "Dishwashing Liquid",
    category: "Household Items",
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "ml", label: "500 ml" },
      { value: 1, unit: "l", label: "1 liter" },
    ],
    defaultQuantity: "500 ml",
    getPrices: (qty) => {
      const multiplier = qty === "1 liter" ? 2 : 1;
      return generatePrices(Math.round(120 * multiplier));
    },
  },
  {
    id: "house-toilet-cleaner",
    name: "Toilet Cleaner",
    category: "Household Items",
    image: "https://images.unsplash.com/photo-1584996900692-cd0cf2a0928e?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 500, unit: "ml", label: "500 ml" },
      { value: 1, unit: "l", label: "1 liter" },
    ],
    defaultQuantity: "500 ml",
    getPrices: (qty) => {
      const multiplier = qty === "1 liter" ? 2 : 1;
      return generatePrices(Math.round(100 * multiplier));
    },
  },
  {
    id: "house-shampoo",
    name: "Shampoo",
    category: "Household Items",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 180, unit: "ml", label: "180 ml" },
      { value: 340, unit: "ml", label: "340 ml" },
      { value: 650, unit: "ml", label: "650 ml" },
    ],
    defaultQuantity: "340 ml",
    getPrices: (qty) => {
      const multiplier = qty === "180 ml" ? 0.5 : qty === "650 ml" ? 2 : 1;
      return generatePrices(Math.round(180 * multiplier));
    },
  },
  {
    id: "house-toothpaste",
    name: "Toothpaste",
    category: "Household Items",
    image: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=400&h=400&fit=crop",
    quantityOptions: [
      { value: 100, unit: "g", label: "100 g" },
      { value: 200, unit: "g", label: "200 g" },
    ],
    defaultQuantity: "100 g",
    getPrices: (qty) => {
      const multiplier = qty === "200 g" ? 2 : 1;
      return generatePrices(Math.round(60 * multiplier));
    },
  },
];
