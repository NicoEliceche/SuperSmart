import { ThemeProvider } from './core/theme/ThemeProvider';
import { CatalogFeature } from './features/catalog';

const App = () => {
  return (
    <ThemeProvider>
      <CatalogFeature />
    </ThemeProvider>
  );
};

export default App;
