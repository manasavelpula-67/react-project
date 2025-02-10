import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const username = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const LoginCheck = () => {
    if (username.current.value === "manasa" && password.current.value === "123456") {
      dispatch(login(username.current.value));
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      setIsAuthenticated(false);
      alert("Your credentials are wrong. Please check them and try again.");
    }
  };

  return (
    <div className="container vh-100 p-5 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: "400px", borderRadius: "12px" }}>
        <h2 className="text-center mb-4">Login Form</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              User Name:
            </label>
            <input
              type="text"
              id="username"
              ref={username}
              className="form-control"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              ref={password}
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="button"
            onClick={LoginCheck}
            className="btn btn-primary w-100"
          >
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          {isAuthenticated
            ? <span className="text-success">Your login was successful!</span>
            : <span className="text-danger">Please enter valid credentials.</span>}
        </div>
      </div>
    </div>
  );
}

export default Login;
