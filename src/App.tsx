import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout';

// Import MDX files
import GettingStarted from './content/getting-started.mdx';
import UseCounterDoc from './content/hooks/useCounter.mdx';
import UseDebounceDoc from './content/hooks/useDebounce.mdx';
import UseClickOutsideDoc from './content/hooks/useClickOutside.mdx';
import UseLocalStorageDoc from './content/hooks/useLocalStorage.mdx';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<GettingStarted />} />
            <Route path="/hooks/use-counter" element={<UseCounterDoc />} />
            <Route path="/hooks/use-debounce" element={<UseDebounceDoc />} />
            <Route path="/hooks/use-click-outside" element={<UseClickOutsideDoc />} />
            <Route path="/hooks/use-local-storage" element={<UseLocalStorageDoc />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
