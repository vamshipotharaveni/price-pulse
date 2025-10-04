import { useState } from 'react';
import { PlatformFilters } from '../PlatformFilters';

export default function PlatformFiltersExample() {
  const [selected, setSelected] = useState(['all']);

  const handleToggle = (platformId: string) => {
    if (platformId === 'all') {
      setSelected(['all']);
    } else {
      const newSelected = selected.includes(platformId)
        ? selected.filter(id => id !== platformId)
        : [...selected.filter(id => id !== 'all'), platformId];
      setSelected(newSelected.length === 0 ? ['all'] : newSelected);
    }
  };

  return (
    <PlatformFilters selectedPlatforms={selected} onPlatformToggle={handleToggle} />
  );
}
