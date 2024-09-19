import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: isAdmin,
    isPending: isAdminLoading,
    isPaused,
  } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res);
      return res.data?.isAdmin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
