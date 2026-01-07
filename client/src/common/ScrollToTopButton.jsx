import { useEffect, useState } from "react";
// import { ArrowUp } from "lucide-react";
import { PiArrowBendRightUpBold } from "react-icons/pi";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    hero?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToHero}
      className="fixed bottom-6 right-6 z-50 
      bg-[#256AF4] text-white 
      p-2 rounded-full shadow-lg
      hover:scale-110 transition-all duration-300"
      aria-label="Back to top"
    >
      {/* <ArrowUp size={22} /> */}
      <PiArrowBendRightUpBold size={22} />
      
    </button>
  );
};

export default ScrollToTopButton;
