import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type QuantityUnit = "g" | "kg" | "l" | "ml" | "piece" | "dozen";

export interface QuantityOption {
  value: number;
  unit: QuantityUnit;
  label: string;
}

interface QuantitySelectorProps {
  options: QuantityOption[];
  selectedQuantity: string;
  onQuantityChange: (quantity: string) => void;
}

export function QuantitySelector({ options, selectedQuantity, onQuantityChange }: QuantitySelectorProps) {
  return (
    <Select value={selectedQuantity} onValueChange={onQuantityChange}>
      <SelectTrigger className="w-full" data-testid="select-quantity">
        <SelectValue placeholder="Select quantity" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.label}
            value={option.label}
            data-testid={`option-quantity-${option.label}`}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
