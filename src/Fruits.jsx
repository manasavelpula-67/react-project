import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "./store";
import { useState } from "react";
function Fruits() {
  const fruitItems = useSelector((state) => state.products.fruits);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");

  let filteredItems;
  if (filter === "above") {
    filteredItems = fruitItems.filter((item) => item.price >= 100);
  } else if (filter === "below") {
    filteredItems = fruitItems.filter((item) => item.price < 100);
  } else {
    filteredItems = fruitItems;
  }
  const [searchItem, setSearchItem] = useState("");
  if (searchItem.trim()) {
    filteredItems = filteredItems.filter((item) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );
  }

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
  const finalItems = currentItems.map((item, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={item.image}
          alt={item.name}
          className="card-img-top img-fluid"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Price: ₹{item.price}</p>
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
      <h1 className="mb-3 text-success fst-italic">Fruit Items</h1>
      <p className="lead">Here you can browse different types of fruits .</p>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="form-control form-control-sm w-50 mx-auto"
        />
      </div>

      <div className="mb-3">
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="filterBelow"
            name="filterOptions"
            value="below"
            checked={filter === "below"}
            onChange={() => setFilter("below")}
            className="form-check-input"
          />
          <label htmlFor="filterBelow" className="form-check-label">
            Below ₹100
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="filterAbove"
            name="filterOptions"
            value="above"
            checked={filter === "above"}
            onChange={() => setFilter("above")}
            className="form-check-input"
          />
          <label htmlFor="filterAbove" className="form-check-label">
            Above ₹100
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="filterAll"
            name="filterOptions"
            value="all"
            checked={filter === "all"}
            onChange={() => setFilter("all")}
            className="form-check-input"
          />
          <label htmlFor="filterAll" className="form-check-label">
            All
          </label>
        </div>
      </div>

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

export default Fruits;
