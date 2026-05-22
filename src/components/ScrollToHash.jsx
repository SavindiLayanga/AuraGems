import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection';

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== '/') return;

    const id = hash ? hash.replace('#', '') : 'home';

    const run = () => scrollToSection(id);
    requestAnimationFrame(() => requestAnimationFrame(run));
  }, [pathname, hash]);

  return null;
}
