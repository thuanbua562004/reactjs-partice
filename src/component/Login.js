import { useEffect, useRef, useState } from "react";
import acessLogo from "../acess";

export default function Login({openLogin}) {
  const [close,setClose] = useState(false)
  useEffect(()=>{
    openLogin(close)
  },[close])
  return (
    <>
    <div  className=" close-login fixed z-40  transform  inset-0 bg-black/50 w-full h-full ">
        <div className="dark:bg-color-dark w-[350px] px-4 md:px-0 md:w-[500px] md:h-[658px] shadow-lg rounded-lg bg-white absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <div onClick={(e)=>setClose(!close)}  className="login absolute btn-close-login"><span>X</span></div>
        <h2 className="md:text-[32px] text-blue-800 font-medium mb-5  text-center">
          Log In
        </h2>
        <p className="dark:text-white text-[14px] text-gray-400 block text-center mb-[30px]">
          Sign in your acount!
        </p>
        <form className="w-full">
          <div className="flex flex-col gap-4">
            {/* Label Email */}
            <label className="text-blue-400 text-start mx-auto w-[400px] ">Email</label>

            {/* Input Email - phần tử thứ 2 (center) */}
            <div className="flex justify-center">
              <input
                className="w-[400px] h-[52px] px-4 py-2 border border-gray-300 rounded-md outline-blue-400 focus:ring-2 focus:ring-blue-300 transition"
                type="text"
                placeholder="E-mail"
              />
            </div>

            {/* Label Password */}
            <label className="text-blue-400 text-start mx-auto w-[400px] ">Password</label>

            {/* Input Password - phần tử thứ 4 (center) */}
            <div className="flex justify-center">
              <input
                className="w-[400px] h-[52px] px-4 py-2 border border-gray-300 rounded-md outline-blue-400 focus:ring-2 focus:ring-blue-300 transition"
                type="text"
                placeholder="Password"
              />
            </div>
          </div>
        </form>

        <div className="md:w-[424px] md:h-[254px] p-[12px]  mx-auto">
          <div className="flex justify-between h-[54px] items-center">
            <div className="flex">
              <input
                className="w-[20px] border-gray-400"
                type="checkbox"
              ></input>
              <span className="ml-2 text-gray-500 dark:text-white" >Remember me</span>
            </div>
            <p className="text-gray-400 text-[14px] dark:text-white"><a>Forgot Password?</a></p>
          </div>
          <button  className="md:w-[400px] w-full h-10 bg-color-main text-center text-white rounded-md shadow-md">
            Login
          </button>
          <div className="flex mx-[40px] mt-5">
            <span className="w-[96px] h-[32px] bg-[#3b5998] flex items-center justify-center rounded-sm px-1 py-2 m-1">
              {acessLogo.logoFaceBook}
            </span>
            <span className="w-[96px] h-[32px] bg-[#55acee] flex items-center justify-center rounded-sm px-1 py-2 m-1">
              {acessLogo.logoTw}
            </span>
            <span className="w-[96px] h-[32px] bg-[#0077b5] flex items-center justify-center rounded-sm px-1 py-2 m-1">
              {acessLogo.logoLinkedin}
            </span>
          </div>
          <div className="flex justify-around my-4">
            <span className="text-[13px] text-gray-400">
              Don't have acount?
            </span>
            <a className="text-[13px] font-medium text-blue-400">
              Create free acount
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
