import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { LuEarth } from "react-icons/lu";
import { MdPlace } from "react-icons/md";
import { useTranslation } from "react-i18next";
import "./header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleOpen = () => {
    setOpen(!open);
    setOpenLanguage(false);
  };

  const toggleLanguageOpen = () => {
    setOpenLanguage(!openLanguage);
    setOpen(false);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setOpenLanguage(false);
  };

  const currentLang =
    i18n.language === "ru" ? "RU" : "KG";

  return (
    <header className="header">
      <div className="header_nav container">
        <a className="header_nav_h1" href="/">
          EasyShop
        </a>
        <h1 className="header_nav_link">{t("info")}</h1>

        <div className="header_nav_national">
          <div className="dropdown_wrapper">
            <button
              onClick={toggleOpen}
              className={`header_nav_national_place ${open ? "active" : ""}`}
            >
              <MdPlace />
              Кыргызстан
              <SlArrowDown className={`arrow ${open ? "rotate" : ""}`} />
            </button>

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
                <button onClick={() => changeLanguage("ky")}>KG</button>
                <button onClick={() => changeLanguage("ru")}>RU</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
