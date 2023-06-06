import { useContext, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { UserContext } from "../../layout/Dashboard";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function DahboardTopBar(props) {
  const { user } = useContext(UserContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  async function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <html className={`${isDarkMode && 'dark'}`}>
      <div className="border-b-[.5px] pb-3 flex justify-between">
        <div></div>

        <div>
          <div className="rounded-full h-7 w-7 border-b-[.5px] flex justify-center items-center">
            {!isDarkMode && (
              <MdLightMode
                size={20}
                className="cursor-pointer"
                onClick={toggleDarkMode}
              />
            )}
            {isDarkMode && (
              <MdDarkMode
                size={20}
                className="cursor-pointer"
                onClick={toggleDarkMode}
              />
            )}
          </div>
          <h1 className="text-2xl font-bold max-w-sm">
            {user?.lastName} {user?.firstName}
          </h1>
        </div>
      </div>
    </html>
  );
}
