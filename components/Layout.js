import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="top-6">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
