"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
// import { jwtDecode } from "jwt-decode";
// import { toast } from "sonner";
import { useRouter } from "next/navigation";
// import { loginUser } from "../api/api";
// import Cookies from "js-cookie";
// import { useGlobalContext } from "@/app/context/GlobalProvider";
// import { ClipLoader } from "react-spinners";

const Page: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  //   const [loading, setLoading] = useState(false);
  //   const pathname = usePathname();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  //   const { setRole, handleUserRole } = useGlobalContext();
  //   const [fullUrl, setFullUrl] = useState<string | null>(null);
  //   const [logoutTimer, setLogoutTimer] = useState<NodeJS.Timeout | null>(null);
  const { push } = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.email === "admin@gmail.com" && formData.password === "12345") {
      push("/dashboard");
    }
  };

  return (
    <div className="flex justify-center flex-col w-1/2">
      <div className="flex flex-col gap-9">
        <div>
          <p className="text-[32px] flex justify-center items-center poppins font-medium ">
            Log In
          </p>
        </div>

        <div className="flex justify-center flex-col items-center">
          <form onSubmit={handleSubmit} method="POST" className="">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#656367] text-[16px] poppins ">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-solid border-[#d9d9d9] px-[12px] py-[5.5px] rounded-md poppins focus:border-[#d9d9d9] focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#656367] poppins">Password</label>
                <div className="relative flex items-center">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className="border border-solid border-[#d9d9d9] px-[12px] py-[5.5px] rounded-md poppins appearance-none relative bg-[#ffffff] text-[#000000] focus:outline-none "
                  />
                  <button
                    id="eye-icon"
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="border border-l-0 absolute bg-[#FFFFFF] inset-y-0 left-[295px] rounded-r-md pr-[15px] pl-[10px] flex items-center cursor-pointer "
                  >
                    {showPassword ? (
                      <>
                        <Image
                          className="w-[14px]"
                          height={14}
                          width={14}
                          src="/login/light-eye-open.svg"
                          alt="Hide Icon"
                        />
                      </>
                    ) : (
                      <>
                        <Image
                          className="w-[14px]"
                          height={14}
                          width={14}
                          src="/login/light-eye-close.svg"
                          alt="Show Icon"
                        />
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-end mb-9">
                <Link href={"/login/forget-password"}>
                  <button type="button">
                    <span className="text-[#A32772] poppins font-bold">
                      Forgot Password?
                    </span>
                  </button>
                </Link>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center font-bold bg-gradient-to-tr from-blue-400 to-indigo-500 text-white shadow-lg border poppins rounded-lg py-[6.5px]"
                // disabled={loading}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
