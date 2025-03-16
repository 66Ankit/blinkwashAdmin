import React from "react";
import "./BillCard.css"; // Import styles

const BillCard = ({ billData }) => {
  if (!billData) return null;

  // Dummy price mapping based on car segment and wash type
  const prices = {
    Hatchback: {
      "Basic Wash": 200,
      "Premium Wash": 300,
      "Full Detailing": 500,
    },
    Sedan: { "Basic Wash": 300, "Premium Wash": 400, "Full Detailing": 600 },
    SUV: { "Basic Wash": 300, "Premium Wash": 500, "Full Detailing": 700 },
    Luxury: {
      "Basic Wash": 300,
      "Premium Wash": 600,
      "Full Detailing": 800,
    },
  };

  // Calculate total price based on car segment and wash type
  const totalPrice = prices[billData.carSegment]?.[billData.washType] || "N/A";

  return (
    <div className="bill-card">
      <h3>Customer Bill</h3>
      <div className="bill-info">
        <p>
          <strong>Name:</strong> {billData.name}
        </p>
        <p>
          <strong>Mobile:</strong> {billData.mobile}
        </p>
        <p>
          <strong>Car Segment:</strong> {billData.carSegment}
        </p>
        <p>
          <strong>Wash Type:</strong> {billData.washType}
        </p>
        <p className="total">
          <strong>Total Price:</strong> ₹{totalPrice}
        </p>
      </div>
    </div>
  );
};

export default BillCard;
