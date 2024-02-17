import React from "react";
import Logo from "../assets/real-estate-logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header>
        <nav>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <ul className="menu menu-horizontal px-1">
                <li className="hover:bg-[#007882] hover:text-white hover:rounded-md">
                  <a className="font-bold " href="#listing-proerties">
                    قائمة العقارات
                  </a>
                </li>

                <li className="hover:bg-[#007882] hover:text-white hover:rounded-md max-sm:hover:bg-[#007882] max-sm:hover:text-white max-sm:hover:rounded-md">
                  <Link to={"/AddForm"}>
                    <a className="font-bold">إضافة عقار </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-none">
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
