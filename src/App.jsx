import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash';
import GemCollectionPage from './pages/GemCollectionPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gem-collection" element={<GemCollectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
