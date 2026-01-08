import { useEffect, useState } from "react";
import { PiArrowBendRightUpBold } from "react-icons/pi";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 z-999
        bg-[#256AF4] text-white
        p-3 rounded-full shadow-lg
        transition-all duration-500 ease-out
        ${show 
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
          : "opacity-0 translate-y-6 scale-90 pointer-events-none"}
      `}
    >
      <PiArrowBendRightUpBold size={22} />
    </button>
  );
};

export default ScrollToTopButton;
