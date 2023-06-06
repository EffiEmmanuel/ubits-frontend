import { useContext, useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { UserContext } from "../../layout/Dashboard";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function DahboardTopBar(props) {
  const { user, darkMode, setDarkMode } = useContext(UserContext);
  // const [darkMode, setdarkMode] = useState(false);

  // HTML ELEMENT
  const [htmlTag, setHtmlTag] = useState();

  async function toggleDarkMode() {
    htmlTag.classList.toggle("dark");
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (document !== undefined) {
      const html = document.querySelector("html");
      console.log("HTML:", html);
      setHtmlTag(html);
    }
  }, [document]);

  return (
    <div className="border-b-[.5px] pb-3 flex justify-between">
      <div></div>

      <div>
        <div className={`rounded-full h-8 w-8 border-[.2px] flex justify-center items-center border-gray-400`}>
          {!darkMode && (
            <MdLightMode
              size={20}
              className="cursor-pointer dark:text-white"
              onClick={toggleDarkMode}
            />
          )}
          {darkMode && (
            <MdDarkMode
              size={20}
              className="cursor-pointer dark:text-white"
              onClick={toggleDarkMode}
            />
          )}
        </div>
        <h1 className="text-2xl font-bold max-w-sm">
          {user?.lastName} {user?.firstName}
        </h1>
      </div>
    </div>
  );
}
