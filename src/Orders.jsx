import { useSelector } from "react-redux";

function Order() {
  const orderObjects = useSelector((state) => state.purchase);

  return (
    <div className="container mt-5 m-5 p-5 w-5">
      <h1 className="mb-4 text-center">Orders Page</h1>
      <p className="lead text-center">Here you can view the items you selected to order.</p>
      
      {orderObjects.length > 0 ? (
        <div className="row g-4"> 
          {orderObjects.map((order, index) => (
            <div key={index} className="col-12"> 
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-warning text-dark">
                  <h5 className="mb-0">Order Date: {order.date}</h5>
                </div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-3 text-muted">
                    Total Amount: ₹{order.totalAmount}
                  </h6>
                  <p className="card-text mb-2"><strong>Items:</strong></p>
                  <ul className="list-group list-group-flush">
                    {order.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="list-group-item d-flex align-items-center"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="me-3"
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                        <div>
                          <p className="mb-1">
                            <strong>{item.name}</strong>
                          </p>
                          <p className="mb-0">
                            ₹{item.price} × {item.quantity} = ₹
                            {item.price * item.quantity}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted text-center">Your order is empty.</p>
      )}
    </div>
  );
}

export default Order;
