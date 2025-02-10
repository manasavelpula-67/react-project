import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "./store";
import { useEffect, useState } from "react";

function Veg() {
  const vegItems = useSelector((state) => state.products.veg);
  const dispatch = useDispatch();

  // Timer state for discount offer
  const [discountTime, setDiscountTime] = useState(300); // 300 seconds = 5 minutes
  const offerActive = discountTime > 0;
  const discount = 10; // 10% discount

  useEffect(() => {
    const interval = setInterval(() => {
      setDiscountTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Filter state: "all", "above", or "below"
  const [filter, setFilter] = useState("all");

  // Filter logic
  let filteredItems;
  if (filter === "above") {
    filteredItems = vegItems.filter((item) => item.price >= 100);
  } else if (filter === "below") {
    filteredItems = vegItems.filter((item) => item.price < 100);
  } else {
    filteredItems = vegItems;
  }

  const [searchItem, setSearchItem] = useState("");
  const searchResults = searchItem.trim()
    ? filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchItem.toLowerCase())
      )
    : filteredItems;

  // Pagination state
  const [pageNumber, setPageNumber] = useState(0);
  const perPage = 6;

 
  const totalPages = Math.ceil(filteredItems.length / perPage);
  const pageStartItemIndex = pageNumber * perPage;
  const currentItems = searchResults.slice(
    pageStartItemIndex,
    pageStartItemIndex + perPage
  );

  const handlePage = (page) => {
    if (page >= 0 && page < totalPages) {
      setPageNumber(page);
    }
  };
  const finalItems = currentItems.map((item, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={item.image}
          alt={item.name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text text-muted">
            Price: ₹{(item.price * (1 - (offerActive ? discount : 0) / 100)).toFixed(2)}
            {offerActive && <span className="text-danger"> (₹{item.price})</span>}
          </p>
          <button
            onClick={() => dispatch(addtoCart(item))}
            className="btn btn-success w-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-5 text-center m-5 p-5">
      <h1 className="mb-3 text-success fst-italic text-center">Veg Items</h1>
      <p className="lead text-center">Browse a variety of vegetables below.</p>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="form-control form-control-sm w-50 mx-auto"
        />
      </div>

      {/* Filter Options */}
      <div className="mb-3 text-center">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="filterOptions"
            id="filterBelow"
            value="below"
            checked={filter === "below"}
            onChange={() => setFilter("below")}
          />
          <label className="form-check-label" htmlFor="filterBelow">
            Below ₹100
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="filterOptions"
            id="filterAbove"
            value="above"
            checked={filter === "above"}
            onChange={() => setFilter("above")}
          />
          <label className="form-check-label" htmlFor="filterAbove">
            Above ₹100
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="filterOptions"
            id="filterAll"
            value="all"
            checked={filter === "all"}
            onChange={() => setFilter("all")}
          />
          <label className="form-check-label" htmlFor="filterAll">
            All
          </label>
        </div>
      </div>
      {discountTime > 0 ? (
        <div className="alert alert-success">
          <h4>
            Limited Time Discount Offer! Ends in: {" "}
            <span className="text-danger">{formatTime(discountTime)}</span>
          </h4>
        </div>
      ) : (
        <div className="alert alert-danger">
          <h4>The discount offer has expired!</h4>
        </div>
      )}
      {/* Grid Display */}
      <div className="row">{finalItems}</div>
      <div className="mt-4">
        <button
          className="btn btn-outline-primary mx-1"
          onClick={() => handlePage(pageNumber - 1)}
          disabled={pageNumber === 0}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`btn mx-1 ${
              index === pageNumber ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => handlePage(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="btn btn-outline-primary mx-1"
          onClick={() => handlePage(pageNumber + 1)}
          disabled={pageNumber + 1 === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Veg;
