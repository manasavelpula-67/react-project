import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutsUs";
import ContactUs from "./ContactUs";
import Login from "./Login";
import NotFound from "./NotFound";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import LeafyVegetables from "./LeafyVegetables";
import Fruits from "./Fruits";
import IceCreams from "./IceCreams";
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const auth = useSelector((state) => state.auth);
  const isauthenticated = auth.isAuthenticated;
  const user = auth.user;
  const dispatch = useDispatch();
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-primary fixed-top pb-1 pt-1" >
        <div className="container-fluid" >
          <NavLink className="navbar-brand" to="/home">
          <i class="fa-solid fa-store"></i>
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/veg" aria-label="Vegetables">
                  Veg-Items
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/nonveg" aria-label="Non-Veg">
                  NonVeg-Items
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/laptop" aria-label="Laptop">
                  Fruits
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mobile" aria-label="Mobile">
                  leafyVegetables
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/icecream" aria-label="IceCream">
                  IceCreams
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                <i class="fa-solid fa-cart-shopping"></i>
                  Cart{" "}
                  <span className="badge bg-light text-danger rounded-pill">{totalItems}</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/orders">
                  Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About-Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact-Us
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              {isauthenticated ? (
                <>
                  <span className="navbar-text me-2">Welcome, {user}</span>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink className="btn btn-outline-light" to="/login">
                  SignIn
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/laptop" element={<Fruits/>} />
        <Route path="/mobile" element={<LeafyVegetables />} />
        <Route path="/icecream" element={<IceCreams/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
