// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reusable component that resets page scroll state to top (0,0) on every active URL change.
 * Extremely critical for React Single Page Applications (SPAs).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
