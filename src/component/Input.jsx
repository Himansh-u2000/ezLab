import React, { forwardRef } from 'react'

const Input = forwardRef(
  (
    {
      label = "",
      type = "text",
      placeholder = "",
      className = "",
      id,
      error = "",
      helperText = "",
      required = false,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${label?.replace(/\s+/g, "-").toLowerCase()}`

    return (
      <div className="flex flex-col">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 font-medium text-gray-700"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}

        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          ref={ref}
          className={`bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F15D2B] ${className}`}
          aria-invalid={!!error}
          {...props}
        />

        {error ? (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        ) : helperText ? (
          <p className="text-gray-500 text-sm mt-1">{helperText}</p>
        ) : null}
      </div>
    )
  }
)

export default Input
