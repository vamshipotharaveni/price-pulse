import { useState } from 'react';
import { Header } from '../Header';
import { ThemeProvider } from '@/contexts/ThemeProvider';

export default function HeaderExample() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('400001');

  return (
    <ThemeProvider>
      <Header
        searchQuery={search}
        onSearchChange={setSearch}
        currentLocation={location}
        onLocationChange={setLocation}
      />
    </ThemeProvider>
  );
}
