import { useState } from 'react';
import { QuantitySelector, type QuantityOption } from '../QuantitySelector';

export default function QuantitySelectorExample() {
  const [quantity, setQuantity] = useState('500 g');

  const options: QuantityOption[] = [
    { value: 250, unit: 'g', label: '250 g' },
    { value: 500, unit: 'g', label: '500 g' },
    { value: 1, unit: 'kg', label: '1 kg' },
    { value: 2, unit: 'kg', label: '2 kg' },
  ];

  return (
    <div className="p-4 max-w-xs">
      <QuantitySelector
        options={options}
        selectedQuantity={quantity}
        onQuantityChange={setQuantity}
      />
    </div>
  );
}
