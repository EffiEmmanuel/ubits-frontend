import axios from "axios";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardHome from "../DasboardHome";
import Dashboard from "../../../components/layout/Dashboard";

function UserDashboardPage() {
  //   Protect Dashboard page
  const [loading, setIsLoading] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  useEffect(() => {
    async function validateSession() {
      const token = localStorage.getItem("token");
      if (!token) {
        redirect("/auth/login");
        //   setIsLoading(false);
        return toast.error("You must be logged in.");
      }

      await axios
        .post(`${process.env.REACT_APP_BASE_URL_API}/users/verifyToken`, {
          token,
        })
        .then((res) => {
          console.log("RESPONSE:", res.data);
          setIsUserLoggedIn(true);
          setIsLoading(false);
        })
        .catch((err) => {
          toast.error(
            "Session expired. Please log in to continue to your dashboard."
          );
          redirect("/auth/login");
          setIsLoading(false);
        });
    }
    // validateSession();
  }, []);

  return (
    <>
      <ToastContainer />
      {isUserLoggedIn && (
        <Dashboard>
          <div></div>
          <DashboardHome />
        </Dashboard>
      )}
    </>
  );
}

export default UserDashboardPage;
