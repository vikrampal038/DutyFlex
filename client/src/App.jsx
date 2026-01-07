import React from "react";
import Mainrouter from "./appRouter/Mainrouter";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import ScrollToTopButton from "./common/ScrollToTopButton";


function App() {
  return (
    <>
      <div className="flex flex-col w-full px-4 sm:px-8 md:px-12 lg:px-16 overflow-x-hidden ">
        <Navbar />
        <Mainrouter />
        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
