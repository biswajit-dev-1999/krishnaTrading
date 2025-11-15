import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Automatically scrolls the window to the top
 * whenever the route/path changes.
 */
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
};

export default useScrollToTop;
