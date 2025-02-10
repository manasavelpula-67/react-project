import { useDispatch, useSelector } from "react-redux";
import { clearcart, decrement, increment, purchaseDetails, remove } from "./store";
import { useState } from "react";

function Cart() {
  const cartObjects = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartItems = cartObjects.map((item, index) => (
    <li
      key={index}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <div>
        <img src={item.image} height={40} width={40} alt={item.name} />
        <strong>{item.name}</strong> - ₹{item.price}
        
      </div>
        <div>
        <button
          className="btn btn-sm btn-warning me-1"
          onClick={() => dispatch(decrement(item))}
        >
          -
        </button>
        </div>
        <span className="badge bg-secondary ms-2">Qty: {item.quantity}</span>
        <div>
        <button
          className="btn btn-sm btn-success me-1"
          onClick={() => dispatch(increment(item))}
        >
          +
        </button>
        </div>
        <div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => dispatch(remove(item))}
        >
          Remove
        </button>
      </div>
    </li>
  ));

  const totalPrice = cartObjects.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

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

  const purchaseDetail = () => {
    const purchaseDate = new Date().toLocaleDateString();
    const handlePurchaseDetails = {
      date: purchaseDate,
      items: [...cartObjects],
      totalAmount: finalAmount,
    };
    dispatch(purchaseDetails(handlePurchaseDetails));
    dispatch(clearcart());
  };

  return (
    <div className="container mt-5 text-center m-5 p-5">
      <h1 className="mb-4">Cart Page</h1>
      <p className="lead">Here you can see the items you selected in your cart.</p>

      {cartObjects.length > 0 ? (
        <div>
          <ul className="list-group mb-4">{cartItems}</ul>

          <div className="mb-3">
            <h5>Total Price: ₹{totalPrice.toFixed(2)}</h5>
          </div>

          <div className="mb-3">
            <h5>Discount: ₹{discountAmount.toFixed(2)}</h5>
            <h5>Coupon Discount: ₹{couponDiscountAmount.toFixed(2)}</h5>
          </div>

          <div className="mb-3">
            <h5>Final Amount: ₹{finalAmount.toFixed(2)}</h5>
          </div>

          <div className="mb-3">
            <button
              className="btn btn-primary me-2"
              onClick={() => setDiscountPercentage(10)}
            >
              Apply 10% Discount
            </button>
            <button
              className="btn btn-primary me-2"
              onClick={() => setDiscountPercentage(20)}
            >
              Apply 20% Discount
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setDiscountPercentage(30)}
            >
              Apply 30% Discount
            </button>
          </div>

          <div className="mb-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter your coupon"
              />
              <button className="btn btn-secondary" onClick={handleCoupon}>
                Apply Coupon
              </button>
            </div>
            {showCouponApplied && (
              <div className="mt-2 alert alert-success">
                <p>
                  <strong>Coupon Code Applied:</strong> {couponCode}
                </p>
                <p>
                  <strong>Coupon Discount:</strong> ₹
                  {couponDiscountAmount.toFixed(2)}
                </p>
              </div>
            )}
          </div>

          <button className="btn btn-success" onClick={purchaseDetail}>
            Complete Purchase
          </button>
        </div>
      ) : (
        <p className="text-muted">Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
