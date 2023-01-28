import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Spinner from "@/components/Spinner";
export default function ClickButton({ children, className, loading = false }) {
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <button
          type="submit"
          disabled={loading}
          className={`items-center px-3 py-3 border border-transparent text-sm rounded-md shadow-lg text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${className} :opacity-50`}
        >
          <div className="text-center">{children}</div>
        </button>
      )}
    </>
  );
}
