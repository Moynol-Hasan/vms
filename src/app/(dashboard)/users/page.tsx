"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { toast } from "sonner";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaSort, FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
// import { getAdmin, userActiveStatus } from "@/app/api/api";
// import { Types } from "@/app/types";
// import { useAuth } from "@/app/Auth/AuthContext";
// import BreadcrumbLastPath from "@/app/breadcrumbs/BreadcrumbLastPath";
// import NextBreadcrumb from "@/app/breadcrumbs/NextBreadcrumb";
// import Image from "next/image";
import Link from "next/link";
import {users} from "./Data"
// import Pagination from "../../../components/pagination";
// import Loading from "./loading";

const Page: React.FC = () => {
//   const [maintoken, setMaintoken] = useState("");
//   const [admins, setAdmins] = useState<Types.Admin[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [sortField, setSortField] = useState<keyof Types.Admin | null>(null);
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const {push} = useRouter();

//   const { token, role, name, profilePicture } = useAuth();

//   useEffect(() => {
//     try {
//       const jsonObject = JSON.parse(token);
//       setMaintoken(jsonObject.token);
//     } catch (err) {}
//   }, [token]);

//   useEffect(() => {
//     const fetchAdmin = async () => {
//       try {
//         const data: Types.Admin[] = await getAdmin(maintoken);
//         setAdmins(data);
//         //
//       } catch (err) {
//         setError("Error fetching customers");
//         if (err instanceof Error) {
//           setError(err.message);
//         } else {
//           setError("An unknown error occurred");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAdmin();
//   }, [maintoken]);

//   if (loading) {
//     return (
//       // <p className="h-full flex justify-center items-center poppins text-[48px] font-semibold">
//       //   Loading...
//       // </p>
//       <Loading />
//     );
//   }

//   const sortedData = [...admins].sort((a, b) => {
//     if (sortField) {
//       const fieldA = a[sortField];
//       const fieldB = b[sortField];

//       if (typeof fieldA === "string" && typeof fieldB === "string") {
//         return sortOrder === "asc"
//           ? fieldA.localeCompare(fieldB)
//           : fieldB.localeCompare(fieldA);
//       } else if (typeof fieldA === "number" && typeof fieldB === "number") {
//         return sortOrder === "asc" ? fieldA - fieldB : fieldB - fieldA;
//       } else if (typeof fieldA === "boolean" && typeof fieldB === "boolean") {
//         return sortOrder === "asc"
//           ? fieldA === fieldB
//             ? 0
//             : fieldA
//             ? -1
//             : 1
//           : fieldA === fieldB
//           ? 0
//           : fieldA
//           ? 1
//           : -1;
//       }
//     }
//     return 0;
//   });

//   const filteredData = activeFilter
//     ? sortedData.filter(
//         (admin) => admin.isActive === (activeFilter === "active")
//       )
//     : sortedData;

//   const searchedData = searchQuery
//     ? filteredData.filter(
//         (admin) =>
//           admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           admin.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           admin.contactNumber.includes(searchQuery)
//       )
//     : filteredData;

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = searchedData.slice(indexOfFirstItem, indexOfLastItem);

//   const handleSort = (field: keyof Types.Admin) => {
//     if (sortField === field) {
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     } else {
//       setSortField(field);
//       setSortOrder("asc");
//     }
//   };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
  };

  const handleUserNameClick = (userId: number) => {
    push(`/administrator/view-administrator-details/${userId}`);
  };

//   const handleActiveStatusChange = async (userId: number) => {
//     try {
//       const response = await userActiveStatus(maintoken, userId);

//       if (response) {
//         toast.success("Status updated successfully");
//       } else {
//         toast.error("Failed to update status");
//       }
//     } catch (error: any) {
//       toast.error(error.message);
//     }

//     setAdmins((prevAdmins) => {
//       return prevAdmins.map((admin) => {
//         if (admin.userId === userId) {
//           return {
//             ...admin,
//             isActive: !admin.isActive,
//           };
//         }
//         return admin;
//       });
//     });
//   };

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

console.log(users);

  return (
    <>
      <div>
        <div className="flex justify-between items-center ml-4 mr-6 mt-6">
          <div className="flex flex-col">
            {/* <BreadcrumbLastPath
              listClasses="text-[#151317] text-[20px] font-medium poppins dark:text-[#FFFFFF] ml-2"
              capitalizeLinks
            />

            <NextBreadcrumb
              separator={<span className="text-[#B5B5C3]"> / </span>}
              activeClasses="poppins"
              containerClasses="flex"
              listClasses="text-[14px] poppins mx-2"
              capitalizeLinks
            /> */}
          </div>

          <div className="flex justify-end">
            <Link href={"/users/create-new-user"}>
              <button className="flex justify-center items-center gap-2 rounded-lg bg-gradient-to-tr from-blue-400 to-indigo-500 px-[20px] py-[10px]">
                {/* <Image
                  src="/dashboard/add.svg"
                  alt="add icon"
                  height={16}
                  width={16}
                /> */}
                <IoMdAddCircleOutline className="text-[#ffffff] h-4 w-4"/>
                <span className="text-white font-bold poppins">Add New</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-[#FFFFFF] m-6 rounded-xl p-6 text-[#3F4254] shadow-md">
          <h1 className="pb-2 poppins ">
            Users Data Table
          </h1>

          <div className="flex flex-col gap-6">
            <div className="flex justify-between mt-6">
              <div className="relative inline-flex items-center">
                <select
                  id="activeFilter"
                  onChange={(e) => handleFilterChange(e.target.value)}
                  value={activeFilter || ""}
                  className="poppins custom-select px-2 py-1 border border-gray-300 rounded-md text-[#918F92] bg-[#ffffff] focus:outline-none appearance-none w-full"
                >
                  <option value="">Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <FaCaretDown
                  className="absolute right-2 pointer-events-none w-auto h-auto"
                />
              </div>

              <div className="flex items-center relative">
                <CiSearch
                  className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search with User Name, Email, Phone Number"
                  // value={searchQuery}
                  // onChange={handleSearchChange}
                  className="w-[320px] pl-8 pr-2 py-1 border border-gray-300 rounded-md bg-[#0000000D] focus:outline-none poppins"
                />
              </div>
            </div>

            <div>
              <h1 className=" mb-6 poppins">
                {users.length} Users
              </h1>
            </div>
          </div>

          <hr className="" />

          <table className="min-w-full divide-y divide-gray-200 poppins ">
            <thead>
              <tr>
              <th
                  className="text-left py-2 cursor-pointer "
                  // onClick={() => handleSort("name")}
                >
                  <span className="flex items-center ">
                    Id
                    <FaSort />
                  </span>
                </th>
                <th
                  className="text-left py-2 cursor-pointer "
                  // onClick={() => handleSort("name")}
                >
                  <span className="flex items-center ">
                    Username
                    <FaSort />
                  </span>
                </th>
                
                <th
                  className="text-left py-2 cursor-pointer "
                  // onClick={() => handleSort("contactNumber")}
                >
                  <span className="flex items-center ">
                    Phone Number
                    <FaSort />
                  </span>
                </th>
                <th
                  className="text-left py-2 cursor-pointer "
                  // onClick={() => handleSort("isActive")}
                >
                  <span className="flex items-center ">
                    Status
                    <FaSort />
                  </span>
                </th>
                {/* <th className=""></th> */}
                <th className=""></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td
                    className="py-3"
                  >
                    {user.id}
                  </td>
                  <td
                    className="py-3 "
                  >
                    {user.name}
                  </td>
                  <td className="py-3 ">{user.mobileNumber}</td>
                  {/* <td className="py-3 dark:text-[#FFFFFFBF]">
                    {admin.contactNumber}
                  </td> */}
                  <td className={`py-3 font-bold rounded`}>
                    <span
                      className={
                        user.active
                          ? "bg-[#47BE7D] py-[3px] px-[10px] text-white rounded"
                          : "bg-[#BDBCBE]  text-white py-[3px] px-[10px] rounded"
                      }
                    >
                      {user.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  {/* <td className="py-3">
                    <div className="flex justify-center items-center ">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          checked={user.active}
                          // onChange={() =>
                          //   // handleActiveStatusChange(user.id)
                          // }
                        />
                        <div className="relative">
                          <div
                            className={`block w-10 h-6 rounded-full ${
                              user.active
                                ? "bg-[#1C469C]"
                                : "bg-white border-2"
                            }`}
                          ></div>
                          <div
                            className={`absolute right-1 top-1 w-4 h-4 ${
                              !user.active
                                ? "dot absolute left-1 top-1 w-4 h-4 rounded-full transition bg-[#DEDEDE]"
                                : null
                            } `}
                          >
                            {user.active ? (
                              <Image
                                src="/dashboard/check.svg"
                                alt="Checkmark"
                                width={20}
                                height={20}
                                className="w-full h-full"
                              />
                            ) : null}
                          </div>
                        </div>
                      </label>
                    </div>
                  </td> */}
                  <td>
                    <div className="flex justify-center items-center">
                      <button className="px-[16px] font-semibold py-[3px] rounded bg-[#1C469C] text-[#ffffff]"
                       onClick={() => handleUserNameClick(user.id)}>
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-5">
            <div className="flex justify-center items-center gap-2">
              <p className="flex text-sm poppins ">
                Showing
              </p>
              <select
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="poppins px-2 py-1 border border-gray-300 rounded-md bg-[#ffffff] focus:outline-none   "
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <p className="flex text-sm poppins ">
                of {users.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
