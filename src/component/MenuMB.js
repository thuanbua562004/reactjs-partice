import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function MenuMb({ closeMenu, state }) {
  const menuRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (closeMenu && menuRef.current) {
      closeMenu(menuRef.current);
    }
  }, [closeMenu]);

  const menuItems = [
    { key: "home" },
    { key: "about" },
    { key: "cause" },
    { key: "even" },
    { key: "Pages" },
    { key: "blog" },
  ];

  return (
    <div
      ref={menuRef}
      className={`menu fixed top-0 left-0 w-[270px] h-screen bg-white shadow-lg z-40 dark:bg-color-dark 
        ${state ? "translate-x-0" : "-translate-x-full"} 
        transition-all duration-500 ease-in-out`}
    >
      <ul className="menu-list mt-[30px]">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="h-[51px] w-[270px] px-[20px] py-[13px] text-color-dark dark:text-white text-[16px] text-start"
          >
            <a href="#">{t(item.key)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
