import React from "react";

export default function SelectBox({
  label,
  id,
  error,
  options = [],
  style = {},
  className = "",
  ...props
}) {
  return (
    <div
      className={`text-left mx-4 my-6 select-control-box ${className} rounded-2xl`}
      style={{ maxWidth: "100%", ...style }} // Apply maxWidth and minWidth to the container
    >
      {label && <label htmlFor={id}>{label}</label>}
      <br />
      <select
        id={id}
        className="select-control my-1 rounded-md"
        {...props}
        {...props.register}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
}
