import React from "react";
import { FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
      <div className="mx-8">
        <button className="btn btn-outline btn-block text-3xl text-green-800">
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
