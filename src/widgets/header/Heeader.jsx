import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { LuEarth } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import "./header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const { t, i18n } = useTranslation();

  

  const toggleLanguageOpen = () => {
    setOpenLanguage(!openLanguage);
    setOpen(false);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setOpenLanguage(false);
  };


  const currentLang =
  i18n.language === "ru"
    ? "RU"
    : i18n.language === "en"
    ? "EN"
    : "中國人";


  return (
    <header className="header">
      <div className="header_nav container">
        <a className="header_nav_h1" href="/">
          EasyShop
        </a>
        <h1 className="header_nav_link">{t("info")}</h1>

        <div className="header_nav_national">
          <div className="dropdown_wrapper">
            {open && (
              <div className="dropdown show">
                <button>Кыргызстан</button>
                <button>Россия</button>
              </div>
            )}
          </div>

          <div className="dropdown_wrapper">
            <button
              className="header_nav_national_language"
              onClick={toggleLanguageOpen}
            >
              <LuEarth />
              {currentLang}
              <SlArrowDown
                className={`arrow ${openLanguage ? "rotate" : ""}`}
              />
            </button>

            {openLanguage && (
              <div className="dropdown show">
                <button onClick={() => changeLanguage("en")}>EN</button>
                <button onClick={() => changeLanguage("ru")}>RU</button>
                <button onClick={() => changeLanguage("zh")}>中國人</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
