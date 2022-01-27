import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./containers/Products";
import Product from "./containers/Product";
import Profile from "./containers/Profile";
import ChangeProduct from "./containers/ChangeProduct";
import SubNav from "./components/SubNav";
import EditProduct from "./containers/EditProduct";
import { useEffect } from "react";
import { setToken, setUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { api } from "./utils/axios";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .post("/user/extract", { token: localStorage.getItem("token") })
      .then((res) => {
        dispatch(setUser(res.data));
        dispatch(setToken(res.data.token));
      })
      .catch((e) => {
        // localStorage.removeItem("token");
        console.log(e);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <SubNav />
      <Routes>
        <Route path="/products/:id" element={<Products />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/new" element={<ChangeProduct />}></Route>
        <Route path="/edit/:id" element={<EditProduct />}></Route>
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
