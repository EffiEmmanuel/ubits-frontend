import axios from "axios";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardHome from "../DasboardHome";
import Dashboard from "../../../components/layout/Dashboard";
import ProfileSettings from "./ProfileSettings";
import BillingSettings from "./BillingSettings";
import AccountSettings from "./AccountSettings";

function UserSettingsPage() {
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

  // Page states
  const [isProfileSettings, setIsProfileSettings] = useState(true);
  const [isBillingSettings, setIsBillingSettings] = useState(false);
  const [isAccountSettings, setIsAccountSettings] = useState(false);

  return (
    <>
      <ToastContainer />
      {isUserLoggedIn && (
        <Dashboard>
          {/* LATEST ACTIVITY */}
          <section className="mt-20 dark:text-white">
            <div className="flex flex-row justify-between items-center">
              <h1
                onClick={() => {
                  setIsProfileSettings(true);
                  setIsBillingSettings(false);
                  setIsAccountSettings(false);
                }}
                className={`text-sm ${isProfileSettings && "font-semibold"} ${
                  isProfileSettings && "underline underline-offset-8"
                } cursor-pointer`}
              >
                Profile settings
              </h1>
              <h1
                onClick={() => {
                  setIsProfileSettings(false);
                  setIsBillingSettings(true);
                  setIsAccountSettings(false);
                }}
                className={`text-sm ${isBillingSettings && 'font-semibold'} ${
                  isBillingSettings && "underline underline-offset-8"
                } py-3 cursor-pointer`}
              >
                Billing settings
              </h1>
              <h1
                onClick={() => {
                  setIsProfileSettings(false);
                  setIsBillingSettings(false);
                  setIsAccountSettings(true);
                }}
                className={`text-sm x${isAccountSettings && 'font-semibold'} ${
                  isAccountSettings && "underline underline-offset-8"
                } py-3 cursor-pointer`}
              >
                Account settings
              </h1>
            </div>

            {/* Main section */}
            <div className="mt-14">
              {isProfileSettings && <ProfileSettings />}
              {isBillingSettings && <BillingSettings />}
              {isAccountSettings && <AccountSettings />}
            </div>
          </section>
        </Dashboard>
      )}
    </>
  );
}

export default UserSettingsPage;
