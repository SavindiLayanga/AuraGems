import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash';
import GemCollectionPage from './pages/GemCollectionPage';
import HomePage from './pages/HomePage';
import JewelryCategoryPage from './pages/JewelryCategoryPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gem-collection" element={<GemCollectionPage />} />
        <Route path="/rings" element={<JewelryCategoryPage />} />
        <Route path="/earrings" element={<JewelryCategoryPage />} />
        <Route path="/necklaces" element={<JewelryCategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
