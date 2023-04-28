import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShopPage from "./Pages/ShopPage";
import ProductDetail from "./Pages/ProductDetail";
import NewNavbar from "./Components/NewNavbar"


function App() {
  return (
    <div > 
      <header>
        {/* <Navbar /> */}
        <NewNavbar/>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/all" element={<ShopPage />} />
        <Route path="/collection/all/:id" element = {<ProductDetail/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
