import { forwardRef } from 'react'

const TextArea = forwardRef(
  (
    {
      label = "",
      placeholder = "",
      className = "",
      id,
      error = "",
      helperText = "",
      required = false,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textAreaId = id || `textarea-${label?.replace(/\s+/g, "-").toLowerCase()}`

    return (
      <div className="flex flex-col">
        {label && (
          <label
            htmlFor={textAreaId}
            className="mb-2 font-medium text-gray-700"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}

        <textarea
          id={textAreaId}
          ref={ref}
          placeholder={placeholder}
          rows={rows}
          className={`bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F15D2B] ${className}`}
          aria-invalid={!!error}
          {...props}
        ></textarea>

        {error ? (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        ) : helperText ? (
          <p className="text-gray-500 text-sm mt-1">{helperText}</p>
        ) : null}
      </div>
    )
  }
)

export default TextArea
