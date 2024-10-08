"use client";
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
interface LoginLayoutProps {
  children: React.ReactNode;
}
const LoginLayout: React.FC<LoginLayoutProps> = (props) => {
  return (
    <>
      <div className="flex ">
        <Sidebar />
          <div className="flex flex-col w-full">
            <Navbar />
              <div className="h-full w-full bg-[#F4F4F4]">
                {props.children}
              </div>
          </div>
      </div>
    </>
  );
};

export default LoginLayout;