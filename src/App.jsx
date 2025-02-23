import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutsUs";
import ContactUs from "./ContactUs";
import Login from "./Login";
import NotFound from "./NotFound";
import LeafyVegetables from "./LeafyVegetables";
import Fruits from "./Fruits";
import GetStarted from "./GetStarted";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const auth = useSelector((state) => state.auth);
  const isauthenticated = auth.isAuthenticated;
  const user = auth.user;
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white d-flex align-items-center" to="/home">
            <i className="fa-solid fa-store me-2"></i> Home
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/veg">
                  <i className="fa-solid fa-carrot me-2"></i> Veg Items
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/nonveg">
                  <i className="fa-solid fa-drumstick-bite me-2"></i> Non-Veg Items
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fruits">
                  <i className="fa-solid fa-apple-whole me-2"></i>Fruits
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leafyvegetables">
                  <i className="fa-solid fa-leaf me-2"></i>Leafy Vegetables
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/orders">
                  <i className="fa-solid fa-pen-to-square me-2"></i> Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <i className="fa-solid fa-address-card me-2"></i> About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <i className="fa-solid fa-phone me-2"></i> Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center text-white">
              <NavLink className="btn btn-outline-light position-relative me-3 d-flex align-items-center" to="/cart">
                <i className="fa-solid fa-cart-shopping me-2  "></i> Cart
                <span className=" badge bg-light text-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                  {totalItems}
                </span>
              </NavLink>

              {isauthenticated ? (
                <>
                  <span className="navbar-text me-3 text-light">Welcome !!</span>
                  <button className="btn btn-outline-light" onClick={() => dispatch(logout())}>
                    Logout
                  </button>
                </>
              ) : (
                <NavLink className="btn btn-outline-light" to="/login">
                  Sign In
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <div className="container mt-5 pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/leafyvegetables" element={<LeafyVegetables />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
