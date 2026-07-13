import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures every route change starts scrolled at the top
 * (without this, React Router preserves scroll position).
 */
export default function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}
