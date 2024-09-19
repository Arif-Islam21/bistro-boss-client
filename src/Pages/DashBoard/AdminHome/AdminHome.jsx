import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl">
        {user?.displayName ? (
          <span>Hi , Welcome back {user.displayName}</span>
        ) : (
          <span>Please login</span>
        )}
      </h2>
    </div>
  );
};

export default AdminHome;
