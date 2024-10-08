"use client";
import dynamic from 'next/dynamic';
const Login = dynamic(() => import('@/app/login/Page'), {
  ssr: false,
})
import Image from 'next/image';

const  Page = ()  => {
  return (
    <>
      
      <div className="h-screen flex justify-center items-center bg-[#f3f1ff] ">
        <div className="bg-[#ffffff] flex justify-center items-center w-auto rounded-2xl gap-10">
          <div className="w-1/2 h-[566px] flex justify-center items-cente mx-10">
            <Image
            src="/login/vms.png"
            alt="hero image"
            height={500}
            width={400}
            />
          </div>

          <div className="w-1/2 h-[566pxx] rounded bg-no-repeat bg-cover flex items-center justify-center mx-10">
            <Login />
          </div>

        </div>
      </div>


    </>
  );
};

export default Page;