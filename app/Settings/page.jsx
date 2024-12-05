import React from "react";
import Link from "next/link";
import Logo from "../../public/Logo.png";

const Settings = () => {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white w-[400px] h-[300px] py-4 rounded-md flex gap-3 flex-col items-center justify-start">
          <div>
            <Link href="/">
              <Image width={20} height={20} src={Logo} alt="logo" />
            </Link>
            <h1 className="font-bold text-xl">Settings</h1>
          </div>
          <div className="w-full h-[.8px] bg-blue-900 opacity-35" />
        </div>
      </div>
    </>
  );
};

export default Settings;
