import React from "react";

export default function InputField({
  label,
  id,
  watch,
  errors,
  placeholder,
  type = "text",
  style = {},
  className = "",
  ...props
}) {

  return (
    <div
      className={`text-left mx-4 my-6 input-control-box ${className}`}
      style={{ maxWidth: "300px", ...style }}
    >
      {label && <label htmlFor={id} className="mb-6">{label}</label>}
      <br />
      <input
        type={type}
        id={id}
        className="input-control my-1 rounded-md mt-2"
        placeholder={placeholder}
        {...props.register}
      />
      {errors && <p className="text-red-500 text-xs mx-2">{errors.message}</p>}
    </div>
  );
}
