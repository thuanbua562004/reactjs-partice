import React, { useState } from "react";
import acessLogo from "../acess";
import Switch from "./Switch";
import { useTranslation } from 'react-i18next';

export default function Setting() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [listSetting, setListSetting] = useState([
    [
      {
        key: "Language",
        to: "",
        children: [
          { key: "Vietnam"},
          { key: "English" },
          { key: "French" },
        ],
      },

      {
        key: "Support",
        to: "/support",
      },
      {
        key: "Mode",
        to: "/donate",
      },
    ],
  ]);
  let list = listSetting[listSetting.length - 1].children
    ? listSetting[listSetting.length - 1].children
    : listSetting[listSetting.length - 1];

  let render = list.map((item) => (
    <li
      onClick={(e) => handlerMoreSetting(item)}
      key={item.key}
      className="h-[50px] flex items-center justify-start ml-1 border-b font-semibold cursor-pointer text-hover"
    >
      <a>
        {item.key} {item.key === "Mode" ? <Switch /> : ""}
      </a>
    </li>
  ));

  function handlerMoreSetting(item) {
    if(item.key == "Vietnam" || item.key =="English" ){
      changeLanguage(item.key)
      handerBack()
    }
    if (item.children) {
      setListSetting((prevState) => [...prevState, item]);
    }
  }
  function handerBack() {
    if (listSetting.length === 1) return;
    setListSetting(listSetting.slice(0, listSetting.length - 1));
  }
  return (
    <>
      <li className="relative group z-40">
        <a className="md:px-5 cursor-pointer font-semibold md:py-10 text-[15px] text-hover">
          {t('setting')}
        </a>
        <ul className="absolute left-0 top-full hidden w-[180px] group-hover:block bg-white dark:bg-color-dark shadow-md rounded-sm transition-all duration-100 transform translate-y-[-10px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          {listSetting.length > 1 ? (
            <li
              onClick={handerBack}
              className="h-[50px] flex items-center justify-start ml-1 border-b font-semibold cursor-pointer text-hover"
            >
              <div>{acessLogo.logoBack} </div>
              <a> {listSetting[listSetting.length - 1].key}</a>
            </li>
          ) : (
            ""
          )}
          {render}
        </ul>
      </li>
    </>
  );
}
