import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
//import apiEndPoints from '../utils/constant'
import backGround_img from "../data/images/Login_background_img.jpg";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
//import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import AuthContext


const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  const [Login, setLogin] = useState(true); 
  const navigate = useNavigate();
  const { login, setLoading, loading } = useAuth(); // Get loading state
  // State for login or signup

  // Toggle between Login and Signup modes
  const toggleLogin = () => {
    setLogin(!Login);

    setValue("fullName", "");
    setValue("email", "");
    setValue("password","");
    reset();
    clearErrors();
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true); // Start loading when login/signup button is clicked

      if (Login) {
        delete data.fullName;
        const response = await axios.post(
          "http://localhost:3000/api/v1/user/login",
          data,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        toast.success(response.data.message);
        login(response.data.user); // Store user in Context API

        setTimeout(() => {
          navigate("/browse"); // ✅ Redirect to Browse page
        }, 2000);
      } else {try{
        setLoading(true); // Start loading when login/signup button is clicked

        
        const response = await axios.post(
          "http://localhost:3000/api/v1/user/register",
          data,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        toast.success(response.data.message);

        setTimeout(() => {
          setLogin(true);
           // ✅ Switch to login after successful signup
        }, 2000);
      
      }catch(error){

      }finally{
        setLogin(true);
      }}
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        JSON.stringify(error.response?.data) ||
        error.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false); // Stop loading when request is done
    }

    reset();
  };


  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={backGround_img}
          alt="Background"
        />
      </div>
      <div className="flex items-center justify-center min-h-screen absolute top-0 left-0 w-full">
        <form
          className="flex flex-col w-3/12 p-12 opacity-90 bg-black rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-3xl text-white text-center mb-5 font-bold">
            {Login ? "LOGIN" : "SIGNUP"}
          </h3>
          <div className="flex flex-col w-full">
            {/* FullName Field (Only for Signup) */}
            {!Login && (
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="outline-none cursor-pointer p-3 my-2 w-full rounded-sm bg-gray-800 text-white"
                  {...register("fullName", {
                    required: "Full Name is required.",
                  })}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
            )}

            {/* Email Field */}
            <div className="w-full">
              <input
                type="email"
                placeholder="Email"
                className="outline-none p-3 my-2 w-full cursor-pointer rounded-sm bg-gray-800 text-white"
                {...register("email", {
                  required: "Email is required.",
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="w-full">
              <input
                type="password"
                placeholder="Password"
                className="outline-none cursor-pointer p-3 my-2 w-full rounded-sm bg-gray-800 text-white"
                {...register("password", {
                  required: "Password is required.",
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-white mt-6 p-3 w-full rounded-sm font-medium"
              style={{ backgroundColor: "rgb(229, 9, 20)" }}
              disabled={loading}
            >
              {loading ? (
              <span>Loading....</span>
            ) : (
              Login ? "LOGIN" : "SIGNUP"
            )}
            </button>

            {/* Toggle Login/Signup */}
            <p className="text-white mt-4 text-center">
              {Login ? "New to Netflix?" : "Already have an account?"}{" "}
              <span
                onClick={toggleLogin}
                className="ml-1 font-medium cursor-pointer"
                style={{ color: "rgb(229, 9, 20)" }}
              >
                {Login ? "Sign Up" : "Login"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
