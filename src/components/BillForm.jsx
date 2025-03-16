import React, { useState } from "react";
import "./BillForm.css";
import ErrorTooltip from "../components/ErrorTooltip";
import BillCard from "../components/BillCard"; // Import BillCard
import axios from "axios";

const BillForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    carSegment: "",
    washType: "",
  });

  const [errors, setErrors] = useState({});
  const [activeErrorField, setActiveErrorField] = useState(null);
  const [billData, setBillData] = useState(null); // For showing bill

  const carSegments = ["Hatchback", "Sedan", "SUV", "Luxury"];
  const washTypes = ["Basic Wash", "Premium Wash", "Full Detailing"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const requestBody = {
        name: formData.name,
        mobile: `91${formData.mobile}`, // Prefix with country code
        carSegment: formData.carSegment,
        washType: formData.washType,
      };

      try {
        const response = await axios.post(
          "https://0380-2405-201-5806-b8dc-6d97-bc0f-a689-a200.ngrok-free.app/api/sms/send",
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("SMS sent successfully:", response.data);
        alert("Bill generated and SMS sent successfully!");
        setBillData(formData); // Set bill data to show in BillCard
      } catch (error) {
        if (error.response) {
          console.error("Failed to send SMS:", error.response.data);
          alert(`Failed to send SMS: ${error.response.data.message}`);
        } else {
          console.error("Error sending SMS:", error.message);
          alert("An error occurred while sending SMS. Please try again.");
        }
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.mobile.match(/^\d{10}$/))
      errors.mobile = "Enter a valid 10-digit number";
    if (!formData.carSegment) errors.carSegment = "Select a car segment";
    if (!formData.washType) errors.washType = "Select a wash type";
    console.log(errors);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (validateForm()) {
  //        // Set bill data to show in BillCard
  //     }
  //   };

  return (
    <div className="bill-form-container">
      <h2>Generate Bill</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Customer Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter customer name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <span
              className="error-icon"
              onClick={() => setActiveErrorField("name")}
            >
              ❗
            </span>
          )}
          {activeErrorField === "name" && (
            <ErrorTooltip
              message={errors.name}
              onClose={() => setActiveErrorField(null)}
            />
          )}
        </div>

        {/* Mobile */}
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter 10-digit mobile number"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && (
            <span
              className="error-icon"
              onClick={() => setActiveErrorField("mobile")}
            >
              ❗
            </span>
          )}
          {activeErrorField === "mobile" && (
            <ErrorTooltip
              message={errors.mobile}
              onClose={() => setActiveErrorField(null)}
            />
          )}
        </div>

        {/* Car Segment */}
        <div className="form-group">
          <label htmlFor="carSegment">Car Segment:</label>
          <select
            id="carSegment"
            name="carSegment"
            value={formData.carSegment}
            onChange={handleChange}
          >
            <option value="">Select Car Segment</option>
            {carSegments.map((segment) => (
              <option key={segment} value={segment}>
                {segment}
              </option>
            ))}
          </select>
          {errors.carSegment && (
            <span
              className="error-icon"
              onClick={() => setActiveErrorField("mobile")}
            >
              ❗
            </span>
          )}
        </div>

        {/* Wash Type */}
        <div className="form-group">
          <label htmlFor="washType">Wash Type:</label>
          <select
            id="washType"
            name="washType"
            value={formData.washType}
            onChange={handleChange}
          >
            <option value="">Select Wash Type</option>
            {washTypes.map((wash) => (
              <option key={wash} value={wash}>
                {wash}
              </option>
            ))}
          </select>
          {errors.washType && (
            <span
              className="error-icon"
              onClick={() => setActiveErrorField("mobile")}
            >
              ❗
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit">Generate Bill</button>
      </form>

      {/* Render BillCard */}
      {billData && <BillCard billData={billData} />}
    </div>
  );
};

export default BillForm;
