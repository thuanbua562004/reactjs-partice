    import { useState, useEffect } from "react";

    export default function Switch() {
      const [isOn, setIsOn] = useState(false);

      useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
          setIsOn(true);
          document.documentElement.classList.add("dark");
        }
      }, []);

      function handlerOnDark() {
        const nextValue = !isOn;
        setIsOn(nextValue);
        localStorage.setItem("theme", nextValue ? "dark" : "light");

        if (nextValue) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }

      return (
        <div className="fixed bottom-0 right-0 mr-5 mb-3 z-50">
          <div
            className={`relative flex items-center h-8 w-16 rounded-2xl cursor-pointer transition-colors duration-300 ${
              isOn ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={handlerOnDark}
          >
            <div
              className={`absolute h-7 w-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isOn ? "translate-x-8" : "translate-x-1"
              }`}
            ></div>
          </div>
        </div>
      );
    }
