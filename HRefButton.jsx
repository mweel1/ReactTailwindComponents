import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Button({ children, path }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        navigate(path);
      }}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-primary bg-transparent hover:text-black focus:outline-none"
    >
      {children}
    </button>
  );
}
