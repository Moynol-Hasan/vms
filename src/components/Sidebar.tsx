"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { toast } from "sonner";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const {push} = useRouter();
  const pathname = usePathname();


  const handleLogout = () => {
    localStorage.removeItem("token");
    push("/");
    toast.success("Logout successful");
  };

  const isActivePath = (path: string) => {
    return pathname.includes(path);
  };

  return (
    <>
      <div className="w-[270px] min-h-screen poppins">
        <div className="flex justify-center items-center gap-[6px] pt-8">
          <span className="text-[20px] font-medium text-[#000000]">
            VMS
          </span>
        </div>

        <div className="mx-4 mt-6">
        <Link href={"/users"}>
  <button
    className={`flex items-center w-full py-1 rounded-md focus:outline-none active:bg-[#5db3e01a] ${
      isActivePath("/dashboard")
        ? "bg-[#5db3e01a] border border-[#FFFFFFBF]"
        : "border border-transparent"
    }`}
  >
    <FaRegUserCircle className={`m-2 w-auto h-auto ${isActivePath("/dashboard") ? "text-[#2070b3]" : "text-[#000000]"}`}/>
    <span className={`${isActivePath("/dashboard") ? "text-[#2070b3]" : "text-[#000000]"}`}>Users</span>
  </button>
</Link>


<Link href={"/report"}>
  <button
    className={`flex items-center w-full py-1 rounded-md focus:outline-none active:bg-[#5db3e01a] ${
      isActivePath("/report")
        ? "bg-[#5db3e01a] border border-[#FFFFFFBF]"
        : "border border-transparent"
    }`}
  >
    <HiOutlineDocumentReport className={`m-2 w-auto h-auto ${isActivePath("/report") ? "text-[#2070b3]" : "text-[#000000]"}`}/>
    <span className={`${isActivePath("/report") ? "text-[#2070b3]" : "text-[#000000]"}`}>Report</span>
  </button>
</Link>


            <button
              className="flex items-center w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#FFFFFF0D] active:bg-[#FFFFFF40]"
              onClick={handleLogout}
            >
              <RiLogoutCircleRLine className={`m-2 w-auto h-auto ${isActivePath("/logout") ? "text-[#2070b3]" : "text-[#000000]"}`}/>
              <span className={`${isActivePath("/logout") ? "text-[#2070b3]" : "text-[#000000]"}`}>Logout</span>
            </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
