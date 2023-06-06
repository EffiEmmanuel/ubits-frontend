import { createContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import DashboardNavbar from "../../ui/DashboardNavbar";
import DashboardTopBar from "../../ui/DashboardTopBar";

// Creating a user context to manage state
export const UserContext = createContext();

function Dashboard(props) {
  const [user, setUser] = useState();

  // Dark mode
  const [darkMode, setDarkMode] = useState();

  //   Current page
  const [currentPage, setCurrectPage] = useState("home");

  function setTheCurrentPage(page) {
    setCurrectPage(page);
  }

  return (
    <UserContext.Provider
      value={{ user, currentPage, setTheCurrentPage, darkMode, setDarkMode }}
    >
      <ToastContainer />
      <DashboardNavbar />
      {/* BODY */}
      <div className="p-10 lg:pl-[25%] bg-white dark:bg-ubtisDarkBlue min-h-screen scrollbar-thin">
        <DashboardTopBar />
        {props.children}
      </div>
    </UserContext.Provider>
  );
}

export default Dashboard;
