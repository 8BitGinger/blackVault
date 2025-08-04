    import { useEffect } from 'react';
    import { useLocation } from 'react-router-dom';

    function ScrollToTop() {
      const { pathname } = useLocation();

      useEffect(() => {
        // Scroll to the top of the document
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth' // Optional: for a smooth scrolling animation
        });
      }, [pathname]); // Re-run effect when pathname changes

      return null; // This component doesn't render anything visible
    }

    export default ScrollToTop;