import { useState } from 'react';
import { LocationModal } from '../LocationModal';

export default function LocationModalExample() {
  const [location, setLocation] = useState('400001');
  
  return (
    <div className="p-4">
      <LocationModal currentLocation={location} onLocationChange={setLocation} />
    </div>
  );
}
