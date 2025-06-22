import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Collection from "./pages/Collection";
import SearchBar from "./components/SearchBar";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:productId" element={<Product />} />
          {/*  <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeholder" element={<Placeholder />} />
        <Route path="/orders" element={<Orders />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
