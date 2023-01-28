export default function Label({ children, htmlFor = "", className = "" }) {
  return (
    <label
      className={`block text-sm font-medium text-gray-700 pb-1 ${className}`}
    >
      {children}
    </label>
  );
}
