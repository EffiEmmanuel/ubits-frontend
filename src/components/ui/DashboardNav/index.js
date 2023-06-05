import {
  FaBug,
  FaCog,
  FaDirections,
  FaFirstAid,
  FaHeadset,
  FaHome,
  FaPlus,
  FaSignOutAlt,
  FaSlideshare,
} from "react-icons/fa";
import { MdAdd, MdContactSupport, MdHelpCenter, MdSupport } from "react-icons/md";
import { Link, redirect } from "react-router-dom";

// Logos
import ubitsLogo from "../../../assets/logos/ubits-dark.png";

export default function DashboardNav({ isNavHidden, user }) {
  return (
    <nav
      className={`bg-[#F4F7FB] md:w-1/4 lg:w-1/5 z-10 fixed w-2/4 min-h-screen lg:block text-black px-10 pt-7 top-0 left-0 ${
        isNavHidden ? "hidden" : "block"
      }`}
    >
      {/* Company Logo */}
      <img
        src={ubitsLogo}
        alt="UBITS Logo"
        className="w-28 h-28 mx-auto"
        style={{ objectFit: "contain" }}
      />

      <Link
        to="/user/dashboard/slides/create-new"
        className="bg-[#0D2D4D] items-center gap-x-3 flex w-full mx-auto border-[0.5px] px-7 py-3 rounded-lg text-ubtisLightBlue border-ubtisLightBlue hover:bg-[#B4CCFECC] hover:text-white"
      >
        <span className="text-sm">Create new slide</span>
        <MdAdd size={20} />
      </Link>

      <ul className="mt-14 mx-auto">
        <li className="my-16">
          <Link to="/user/dashboard" className="flex align-middle gap-2">
            <FaSlideshare size={16} className="my-auto" />
            <span className="my-auto text-sm">My slides</span>
          </Link>
        </li>

        <li className="my-16">
          <Link to="/user/dashboard" className="flex align-middle gap-2">
            <FaCog size={16} className="my-auto" />
            <span className="my-auto text-sm">Settings</span>
          </Link>
        </li>

        <li className="my-16">
          <Link to="/user/dashboard" className="flex align-middle gap-2">
            <MdSupport size={16} className="my-auto" />
            <span className="my-auto text-sm">Help center</span>
          </Link>
        </li>

        <li className="my-16">
          <span
            onClick={() => {
              localStorage.removeItem("token");
              redirect("/auth/login");
            }}
            className="flex align-middle gap-2 mt-4"
          >
            <FaSignOutAlt size={16} className="my-auto" />
            <span className="my-auto text-sm">Log out</span>
          </span>
        </li>
      </ul>
    </nav>
  );
}
