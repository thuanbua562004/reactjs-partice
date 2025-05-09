import { useState ,useEffect } from "react";
import logo from "../acess";
import Btndonate from "./Btndonate";
import Setting from "./Setting";
import MenuMb from "./MenuMB";
import Login from "./Login";
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [stateMenu, setStateMenu] = useState(false);
  const [menuRef, setMenuRef] = useState(null);
  const [closeLogin ,setCloseLogin] = useState(false)

  const { t, i18n } = useTranslation();

  function showMenu(state) {
    setStateMenu(state);
  }
  function closeMenu(refDom) {
    setMenuRef(refDom);
  }
  function handleClickOutside(event) {
    console.log(event)
    if (menuRef && !menuRef.contains(event.target)) {
      setStateMenu(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);
  
    function openLogin(state) {
      setCloseLogin(state)
  }

  return (
    <>
      {!closeLogin ? <Login  openLogin={openLogin}/>:""}
      <MenuMb closeMenu={closeMenu} state={stateMenu}/> 
        <div className=" mx-auto max-h-fit md:w-md  pb-2 bg-white shadow-md dark:bg-color-dark dark:text-white">
        {/* Top Bar */}
        <div className="top-bar lg:max-w-6xl  h-auto md:h-14 px-4 md:flex mx-auto">
          <div className="top-left w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="top-link h-14 text-sm py-4 md:pr-4 flex items-center md:border-r cursor-pointer text-hover">
              {logo.logoPhone}
              <i className="ml-1">+000123456789</i>
            </div>
            <div className="top-link h-14 text-sm py-4 px-4 flex items-center cursor-pointer text-hover">
              {logo.logoEmail}
              <i className="ml-1">vanthuan5622004@gmail.com</i>
            </div>
          </div>

          <div className="top-right w-full md:w-1/2 flex justify-center md:justify-end items-center">
            <div onClick={(e)=>setCloseLogin(!closeLogin)} className="top-link py-4 pr-4 flex items-center md:border-r cursor-pointer text-hover">
              {t('login')}
            </div>
            <div className="top-link py-4 px-4 flex items-center cursor-pointer text-hover">
              {t('sigin')}
            </div>
            <Btndonate size="w-[120]" />
          </div>
        </div>

        <div className="w-full border-b border-gray-300"></div>

        {/* Header Main */}
        <div className="header-main flex justify-between px-4 h-[80px] items-center max-w-6xl md:mx-auto md:h-[98px]">
          <div className="logo">
            <img
              className="w-[180px]"
              src="https://nasarna-react.wpocean.com/static/media/logo.450df77d.png"
              alt="Logo"
            />
          </div>

          {/* Navigation */}
          <div className="navi md:flex hidden">
            <ul className="md:flex">
              {["home", "about", "cause", "even", "even", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a className="md:px-5 cursor-pointer font-semibold md:py-10 text-[15px] text-hover">
                      {t(item)}
                    </a>
                  </li>
                )
              )}
              <Setting />
            </ul>
          </div>

          {/* Icons */}
          <div className="action flex items-center">
            <div className="w-10 flex items-center md:h-10 cursor-pointer">
              <a>{logo.logoSearch}</a>
            </div>
            <div className="w-10 h-10 flex items-center justify-center relative cursor-pointer">
              <a>{logo.logoCart}</a>
              <span className="absolute -top-1 -right-1 flex justify-center items-center w-5 h-5 rounded-full bg-color-main text-white text-[10px]">
                04
              </span>
            </div>
            <div
              onClick={(e) => showMenu(!stateMenu)}
              className="menu md:hidden w-10 h-10 px-5 bg-color-main rounded-sm flex items-center justify-center ml-2 cursor-pointer"
            >
              <a>{logo.logoMenu}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
