import { createContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import DashboardNavbar from "../../ui/DashboardNavbar";

// Creating a user context to manage state
export const UserContext = createContext();

function Dashboard(props) {
  const [user, setUser] = useState();

  //   Current page
  const [currentPage, setCurrectPage] = useState("home");

  function setTheCurrentPage(page) {
    setCurrectPage(page);
  }

  return (
    <UserContext.Provider value={{ user, currentPage, setTheCurrentPage }}>
      <ToastContainer />
      <DashboardNavbar />
      {/* BODY */}
      <div className="p-10 lg:pl-[25%] bg-white min-h-screen scrollbar-thin">{props.children}</div>
    </UserContext.Provider>
  );
}

export default Dashboard;
