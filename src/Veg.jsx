import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "./store";
import { useState } from "react";

function Veg() {
  const vegItems = useSelector((state) => state.products.veg);
  const dispatch = useDispatch();
  
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
   // Pagination logic
   const totalPages = Math.ceil(filteredItems.length / perPage);
   const pageStartItemIndex = pageNumber * perPage;
   const currentItems = filteredItems.slice(pageStartItemIndex, pageStartItemIndex + perPage);
   const handlePage = (page) => {
    if (page >= 0 && page < totalPages) {
      setPageNumber(page);
    }
  };
  // Map items into Bootstrap card components
  const finalItems = currentItems.map((item, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={item.image}
          alt={item.name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Price: ₹{item.price}/Kilogram</p>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => dispatch(addtoCart(item))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container mt-5 text-center m-5 p-5">
      <h1 className="mb-3 text-success fst-italic text-center" >Veg Items</h1>
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

      {/* Grid Display */}
      <div className="row">
        {finalItems}
      </div>
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
            className={`btn mx-1 ${index === pageNumber ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handlePage(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="btn btn-outline-primary mx-1"
          onClick={() => handlePage(pageNumber + 1)}
          disabled={pageNumber +1 === totalPages }
        >
          Next
        </button>
      </div>

    </div>

  );
}

export default Veg;
