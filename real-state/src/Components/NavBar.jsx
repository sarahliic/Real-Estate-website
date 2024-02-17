import React from "react";
import Logo from "../assets/real-estate-logo.png";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
function NavBar() {
  return (
    <>
      <header>
        <nav>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <ul className="menu menu-horizontal px-3">
                <li className="hover:bg-[#073D5C] hover:text-white hover:rounded-md max-sm:hover:bg-[#073D5C] max-sm:hover:text-white max-sm:hover:rounded-md">
                  <Link to={"/AddForm"}>
                    <a className="font-bold">إضافة عقار </a>
                  </Link>
                </li>{" "}
                <li className="hover:bg-[#073D5C] hover:text-white hover:rounded-md">
                  <AnchorLink href="#Listing-properties">
                    {" "}
                    <a className="font-bold ">قائمة العقارات</a>{" "}
                  </AnchorLink>
                </li>
                <Link to={"/"}>
                  <li className="hover:bg-[#073D5C] hover:text-white hover:rounded-md">
                    <a className="font-bold ">الصفحة الرئيسية</a>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex-none pr-4">
              <Link to={"/"}>
                <img src={Logo} alt="Real Estate logo" width={70} />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
