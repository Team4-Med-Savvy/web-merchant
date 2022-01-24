import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./containers/Products";
import Product from "./containers/Product";
import Profile from "./containers/Profile";
import ChangeProduct from "./containers/ChangeProduct";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/new" element={<ChangeProduct />}></Route>
        <Route exact path="*" element={<Home />}></Route>

        {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
