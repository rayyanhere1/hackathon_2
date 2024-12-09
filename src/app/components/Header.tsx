import Image from "next/image";
import React from "react";
import topLogo from "@public/images/logo/favicon.svg";
import logo from "@public/images/logo/logo.svg";
import wishlistIcon from "@public/images/icons/wishlist.svg";
import cartIcon from "@public/images/icons/cart.svg";
import searchIcon from "@public/images/icons/search.svg";
import Link from "next/link";


const Header = () => {
    return (
      <div>
        <div className="flex justify-between items-center px-10 ">
          {/* Top Logo */}
          <Image src={topLogo} alt="Top Logo" />
  
          {/* Top Navigation */}
          <ul className="flex space-x-6 py-3">
            <li className="flex items-center border-r border-black pr-6">
              <Link href="/store" className="leading-[14px]">
                Find a Store
              </Link>
            </li>
            <li className="flex items-center border-r border-black pr-6">
              <Link href="/help" className="leading-[14px]">
                Help
              </Link>
            </li>
            <li className="flex items-center border-r border-black pr-6">
              <Link href="/join" className="leading-[14px]">
                Join Us
              </Link>
            </li>
            <li className="flex items-center pr-6">
              <Link href="/sign-in" className="leading-[14px]">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
        </div>

);
};

export default Header;