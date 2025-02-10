import { useSelector } from "react-redux";

function Order() {
  const orderObjects = useSelector((state) => state.purchase);

  return (
    
    <div
      className="d-flex justify-content-center align-items-center "
      style={{
        height: "100%",
        paddingLeft:"300px"
      }}
    >
      <div
        className="container bg-white  rounded m-5 "
        style={{
          maxWidth: "900px", // Set a max width for the content
        }}
      >
        <h1 className="mb-4 text-center text-success fst-italic">Orders Page</h1>
        <p className="lead text-center">
          Here you can view the items you selected to order.
        </p>

        {orderObjects.length > 0 ? (
          <table className="table table-bordered table-hover mt-4">
            <thead className="table-warning">
              <tr>
                <th className="text-center">S.No</th>
                <th className="text-center">Order Date</th>
                <th>Item Name</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Price (₹)</th>
                <th className="text-center">Total Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {orderObjects.map((order, orderIndex) =>
                order.items.map((item, itemIndex) => (
                  <tr key={`${orderIndex}-${itemIndex}`}>
                    {itemIndex === 0 && (
                      <td
                        rowSpan={order.items.length}
                        className="align-middle text-center"
                      >
                        {orderIndex + 1}
                      </td>
                    )}
                    {itemIndex === 0 && (
                      <td
                        rowSpan={order.items.length}
                        className="align-middle text-center"
                      >
                        {order.date}
                      </td>
                    )}
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center">₹{item.price}</td>
                    {itemIndex === 0 && (
                      <td
                        rowSpan={order.items.length}
                        className="align-middle text-center"
                      >
                        ₹{order.totalAmount}
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        ) : (
          <p className="text-muted text-center">Your order is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Order;
