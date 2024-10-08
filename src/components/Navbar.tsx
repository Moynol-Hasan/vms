"use client";
import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { Types } from "../types";
// import { useTheme } from "next-themes";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { jwtDecode } from "jwt-decode";
// import { findUser } from "../api/api";
// import { User } from "@nextui-org/react";
// import BreadcrumbFirstPath from "../breadcrumbs/BreadcrumbFirstPath";
// import styles from "./App.module.css";

// interface DecodedToken {
//   UserID: number;
//   authorities: { authority: string }[];
//   sub: string;
//   iat: number;
//   exp: number;
// }

const Navbar: React.FC = () => {
  //   const { push } = useRouter();
  //   const [users, setUsers] = useState<Types.Admin | null>(null);
  //   const [role, setRole] = useState<string | null>("");
  //   const [isChecked, setIsChecked] = useState(false);
  //   const { systemTheme, theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex justify-between items-center h-[80px] w-full px-10">
        <div className="flex">
          {/* <BreadcrumbFirstPath
            listClasses="text-[#151317] text-[20px] font-medium poppins dark:text-[#FFFFFF]"
            capitalizeLinks
          /> */}
        </div>

        <div className="flex justify-end items-center gap-6">
          <div className="flex gap-4">
            <div>
              <h1 className="text-[#39363C] poppins">userName </h1>
              <h1 className="flex justify-end text-[#918F92] poppins">role</h1>
            </div>
            <div className="flex justify-center items-center">
              {/* {users?.profilePicture ? (
                <User
                  name=""
                  description=""
                  avatarProps={{
                    src: users.profilePicture, // Directly use the image URL
                    className: styles.navbarAvatarImage,
                  }}
                  className="!gap-0"
                />
              ) : (
                <User
                  name=""
                  description=""
                  avatarProps={{
                    src: "/dashboard/noImage.png", // Directly use the image URL
                    className: styles.navbarAvatarImage,
                  }}
                  className="!gap-0"
                />
              )} */}

              {/* {users?.profilePicture ? (
                <div className="rounded-full-image-container">
                  <Image
                    src={users?.profilePicture}
                    alt="Profile Picture"
                    width={40}
                    height={40}
                    className="rounded-full-image"
                  />
                </div>
              ) : ( */}
              <div className="rounded-full-image-container">
                <Image
                  src="/navbar/noImage.png"
                  alt="Profile Picture"
                  width={40}
                  height={40}
                  className="rounded-full-image"
                  quality={100}
                />
              </div>
              {/* )} */}
            </div>
          </div>

          {/* <div>
                <Image
                  src="/dashboard/notification.svg"
                  alt="Notification"
                  width={32}
                  height={32}
                />
              </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
