export default function Card({ children, className }) {
  return (
    <div className={`shadow-sm sm:overflow-hidden sm:rounded-xl ${className}`}>
      <div className="bg-white py-2 px-2 sm:p-6">{children}</div>
    </div>
  );
}
