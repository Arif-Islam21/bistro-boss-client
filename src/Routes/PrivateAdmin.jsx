import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const PrivateAdmin = ({ children }) => {
  const [user, loading] = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <p className="text-center lg:mt-24 progress w-56 text-red-600">
        Loading....
      </p>
    );
  }

  if (user && isAdmin) return children;

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateAdmin;
