import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="layout_content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
