import Home from '../Home';
import { ThemeProvider } from '@/contexts/ThemeProvider';

export default function HomeExample() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
