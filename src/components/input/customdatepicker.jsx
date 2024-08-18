import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDatePicker({
  label,
  id,
  errors,
  selectedDate,
  onChange,
  style = {},
  filterdate = null,
  className = "",
  placeholderText = "",
  register
}) {
  const ExampleCustomInput = forwardRef(
    ({ value, onClick, className }, ref) => (

      <input
        id={id}
        type="text"
        value={value}

        onClick={onClick}
        ref={ref}
        className={className}
        placeholder={placeholderText}
        readOnly
      />
    ),
  );
  return (
    <div
      className={`text-left mx-4 my-6 custom-date-picker ${className}`}
      style={{ maxWidth: "100%", ...style }}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <br />

      <DatePicker
        id={id}
        selected={selectedDate}
        onChange={(date) => onChange(date)}
        dateFormat="MMMM d, yyyy"
        placeholderText={placeholderText}
        filterDate={filterdate}
        customInput={
          <ExampleCustomInput className="input-control my-1" />}
      />
      {errors && <p className="text-red-500 text-xs mx-2">{errors.message}</p>}

    </div>
  );
}
