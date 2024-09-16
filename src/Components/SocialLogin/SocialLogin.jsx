import React from "react";
import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="divider "></div>
      <div className="mx-8">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-block text-3xl text-green-800"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
