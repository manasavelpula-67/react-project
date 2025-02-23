import { useDispatch, useSelector } from "react-redux";
import { clearcart, decrement, increment, purchaseDetails, remove } from "./store";
import { useState } from "react";

function Cart() {
  const cartObjects = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartObjects.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const [discountPercentage, setDiscountPercentage] = useState(0);
  const discountAmount = (totalPrice * discountPercentage) / 100;

  const [couponCode, setCouponCode] = useState("");
  const [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0);
  const [showCouponApplied, setShowCouponApplied] = useState(false);

  const handleCoupon = () => {
    switch (couponCode.toUpperCase()) {
      case "MANASA10":
        setCouponDiscountPercentage(10);
        setShowCouponApplied(true);
        break;
      case "MANASA20":
        setCouponDiscountPercentage(20);
        setShowCouponApplied(true);
        break;
      case "MANASA30":
        setCouponDiscountPercentage(30);
        setShowCouponApplied(true);
        break;
      default:
        alert("Invalid coupon applied");
        setCouponDiscountPercentage(0);
        setShowCouponApplied(false);
    }
  };

  const couponDiscountAmount = (totalPrice * couponDiscountPercentage) / 100;
  const finalAmount = totalPrice - discountAmount - couponDiscountAmount;

  const placeOrder = () => {
    const purchaseDate = new Date().toLocaleDateString();
    dispatch(
      purchaseDetails({
        date: purchaseDate,
        items: [...cartObjects],
        totalAmount: finalAmount,
      })
    );
    dispatch(clearcart());
  };

  return (
    <div className="container mt-5" style={{paddingLeft:"350px"}}>
      <h1 className="mb-4 text-success text-center fst-italic">Shopping Cart</h1>

      {cartObjects.length > 0 ? (
        <>
          {/* Cart Table */}
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-success">
                <tr>
                  <th>Image</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartObjects.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={item.image} height={50} width={50} alt={item.name} />
                    </td>
                    <td><strong>{item.name}</strong></td>
                    <td>₹{item.price}</td>
                    <td>
                      <button className="btn btn-sm btn-warning me-2" onClick={() => dispatch(decrement(item))}>-</button>
                      <span className="badge bg-secondary">{item.quantity}</span>
                      <button className="btn btn-sm btn-success ms-2" onClick={() => dispatch(increment(item))}>+</button>
                    </td>
                    <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button className="btn btn-sm btn-danger" onClick={() => dispatch(remove(item))}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Order Summary - Below the Table */}
          <div className="card p-3 shadow-sm mt-4">
            <h4 className="text-center">Order Summary</h4>
            <hr />
            <table className="table">
              <tbody>
                <tr>
                  <td><strong>Total Price:</strong></td>
                  <td>₹{totalPrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Discount:</strong></td>
                  <td>₹{discountAmount.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Coupon Discount:</strong></td>
                  <td>₹{couponDiscountAmount.toFixed(2)}</td>
                </tr>
                <tr className="table-warning">
                  <td><strong>Final Amount:</strong></td>
                  <td><strong>₹{finalAmount.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </table>
            <hr />

            {/* Discount Buttons */}
            <div className="d-grid gap-2 mb-3 text-center">
              <button className="btn btn-primary" onClick={() => setDiscountPercentage(10)}>Apply 10% Discount</button>
              <button className="btn btn-primary" onClick={() => setDiscountPercentage(20)}>Apply 20% Discount</button>
              <button className="btn btn-primary" onClick={() => setDiscountPercentage(30)}>Apply 30% Discount</button>
            </div>

            {/* Coupon Input */}
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter Coupon Code"
              />
              <button className="btn btn-secondary" onClick={handleCoupon}>Apply</button>
            </div>

            {/* Coupon Applied Message */}
            {showCouponApplied && (
              <div className="alert alert-success p-2 text-center">
                <strong>Coupon Applied:</strong> {couponCode} <br />
                <strong>Discount:</strong> ₹{couponDiscountAmount.toFixed(2)}
              </div>
            )}

            <button className="btn btn-success w-100 mt-3" onClick={placeOrder}>
              Complete Purchase
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-success">Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
