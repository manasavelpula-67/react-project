import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 text-danger">Page Not Found</h1>
      <p className="lead">You will be redirected to the home page in 5 seconds...</p>
      <img
        src="p1.webp"
        className="img-fluid mt-4 rounded shadow"
        alt="Not Found"
        style={{ maxHeight: "500px", maxWidth: "700px" }}
      />
    </div>
  );
}

export default NotFound;
