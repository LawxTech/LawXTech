import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 600,
      once: false,
      mirror: true,
      debounceDelay: 50,
    });
  }, []);

  return null;
};
