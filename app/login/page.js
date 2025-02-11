"use client"
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import React, {useEffect} from "react";
import { Textarea } from "../Components/ui/textarea";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session]);

  if (session) return null;
  
  return (
    <>
      <div className="flex items-center justify-center mt-1 p-8 pb-0">
        <div className="w-full max-w-md p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-center text-white mb-2">
            Welcome back!
          </h2>
          <p className="text-center text-white mb-3 text-xs">
            Access your account securely
          </p>

          <div className="w-full mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="username"
                      className="leading-7 text-sm text-white"
                    >
                      Username
                    </label>
                    <Textarea />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="leading-7 text-sm text-white"
                    >
                      Password
                    </label>
                    <Textarea />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="button"
                    className=" flex relative mx-40 mt-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>


          <div className="flex items-center my-3">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500 text-xs font-medium">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition font-medium shadow-sm mb-2 text-xs">
            <FaGoogle className="text-xs text-red-500" /> Continue with Google
          </button>

          <button onClick={()=>{signIn("github")}} className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition font-medium shadow-sm mb-2 text-xs">
            <FaGithub className="text-xs text-gray-900" /> Continue with GitHub
          </button>

          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition font-medium shadow-sm text-xs">
            <FaFacebook className="text-xs text-blue-600" /> Countinue with Facebook
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
