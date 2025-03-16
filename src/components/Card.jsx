import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "@/components/ui/button";

const Receipt = ({ customer, service, priceDetails }) => {
  return (
    <Card className="w-full max-w-md mx-auto p-6 shadow-lg rounded-lg bg-white">
      <CardContent>
        <h2 className="text-xl font-semibold text-center mb-4">
          BlinkWash Service Receipt
        </h2>
        <div className="text-sm text-gray-600 text-center mb-4">
          📅 Date: {new Date().toLocaleDateString()} <br />
          🕒 Time: {new Date().toLocaleTimeString()}
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium">Customer Details:</h3>
          <p>👤 Name: {customer.name}</p>
          <p>📞 Mobile: {customer.mobile}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium">Service Details:</h3>
          <p>🚗 Car Segment: {service.carSegment}</p>
          <p>🧼 Wash Type: {service.washType}</p>
        </div>

        <div className="mb-4 border-t pt-2">
          <h3 className="text-lg font-medium">Price Breakdown:</h3>
          <ul>
            {priceDetails.services.map((item, index) => (
              <li key={index} className="flex justify-between">
                {item.name} <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-semibold mt-2">
            <span>Total</span> <span>₹{priceDetails.total}</span>
          </div>
          <div className="flex justify-between text-green-600 font-semibold">
            <span>Discount</span> <span>-₹{priceDetails.discount}</span>
          </div>
          <div className="flex justify-between text-lg font-bold mt-2">
            <span>Final Amount</span> <span>₹{priceDetails.finalAmount}</span>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-4">
          🔹 Payment Mode: {priceDetails.paymentMode} <br />✅ Status:{" "}
          {priceDetails.paymentStatus}
        </div>

        <Button className="w-full mt-4">Download Receipt</Button>
      </CardContent>
    </Card>
  );
};

// Example usage
const customer = {
  name: "John Doe",
  mobile: "9876543210",
};

const service = {
  carSegment: "SUV",
  washType: "Premium Wash",
};

const priceDetails = {
  services: [
    { name: "Car Wash (SUV)", price: 700 },
    { name: "Interior Cleaning", price: 300 },
    { name: "Wax Polish", price: 400 },
  ],
  total: 1400,
  discount: 100,
  finalAmount: 1300,
  paymentMode: "UPI",
  paymentStatus: "Paid",
};

export default function ReceiptPage() {
  return (
    <Receipt
      customer={customer}
      service={service}
      priceDetails={priceDetails}
    />
  );
}
