import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>짐웨어검색</title>
      </Head>
      <Header />
      <main className="top-6">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
