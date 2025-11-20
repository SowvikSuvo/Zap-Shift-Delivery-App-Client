import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const { signInGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mb-8">
      {/* Divider */}
      <div className="flex items-center gap-2 my-2">
        <div className="h-px bg-gray-300 flex-grow dark:bg-gray-400"></div>
        <span className="text-gray-400 text-sm">or</span>
        <div className="h-px bg-gray-300 flex-grow dark:bg-gray-400"></div>
      </div>

      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="btn mx-auto border  bg-gray-200 hover:bg-primary  rounded-xl shadow-sm  dark:border-primary flex items-center justify-center gap-2"
      >
        <FcGoogle size={22} /> Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
