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
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh", // Ensure it takes the full height of the viewport
        backgroundColor: "#f8f9fa",
        paddingLeft:"450px",
      }}
    >
      <div
        className="card  border-primary rounded"
        style={{
          maxWidth: "400px", // Set a max width for responsiveness
          width: "100%", // Ensures full width in smaller screens
        }}
      >
        {/* Card Header */}
        <div className="card-header bg-primary text-white text-center">
          <h2 className="mb-0">Login Form</h2>
        </div>

        {/* Card Body */}
        <div className="card-body">
          <form>
            {/* Username Field */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-danger fw-bold">
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

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-success fw-bold">
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

            {/* Login Button */}
            <button
              type="button"
              onClick={LoginCheck}
              className="btn btn-primary w-100"
            >
              Login
            </button>
          </form>

          {/* Feedback Message */}
          <div className="mt-3 text-center">
            {isAuthenticated ? (
              <span className="text-success">Your login was successful!</span>
            ) : (
              <span className="text-danger">Please enter valid credentials.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
