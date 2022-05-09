import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const Layout = ({ children }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Head>
        <title>짐웨어검색</title>
      </Head>
      <Header isScrolled={showTopBtn} />
      <main className="top-6">{children}</main>
      <Footer />
      {showTopBtn && (
        <FaAngleUp
          className="fixed right-5 bottom-5 w-7 h-7 z-10 cursor-pointer"
          onClick={goToTop}
        />
      )}
    </>
  );
};

export default Layout;
