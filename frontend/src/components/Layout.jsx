import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import A from "../pages/testMenuA/TestA";
import B from "../pages/testMenuA/TestB";

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<main><h1>Home Page</h1></main>} />
          <Route path="/TestA" element={<A />} />
          <Route path="/TestB" element={<B />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Layout;
