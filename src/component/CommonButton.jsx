
export default function CommonButton({ children, onCLick, className }) {
  return (
    <button
      onClick={onCLick}
      className={`bg-[#F15D2B] rounded-full px-4 py-2 text-white justify-center flex items-center ${className}`}
    >{children}</button>
  )
}
