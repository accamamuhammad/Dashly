import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="w-full relative h-14 border-b-[0.5px] border-b-slate-300 px-5 flex flex-row items-center justify-between">
      <Link href="/">
        <Image width={20} height={20} src={Logo} alt="logo" />
      </Link>
      <Link href="/Settings">
        <FontAwesomeIcon icon={faGear} width={18} className="cursor-pointer" />
      </Link>
    </nav>
  );
};

export default Nav;
