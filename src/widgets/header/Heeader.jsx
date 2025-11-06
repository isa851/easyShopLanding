import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { LuEarth } from "react-icons/lu";
import { MdPlace } from "react-icons/md";
import "./header.scss";
import { useTranslation } from "react-i18next";
import "../../i18n/i18n"; // важно! чтобы i18n инициализировался


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

  const closeOpen = () => setOpen(false);
  const closeLanguageOpen = () => setOpenLanguage(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeLanguageOpen();
  };

  return (
    <header className="header ">
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
              {t("Кыргызстан")}
              <SlArrowDown className={`arrow ${open ? "rotate" : ""}`} />
            </button>

            {open && (
              <div className="dropdown show">
                <button onClick={closeOpen}>{t("Кыргызстан")}</button>
                <button onClick={closeOpen}>{t("Россия")}</button>
              </div>
            )}
          </div>

          <div className="dropdown_wrapper">
            <button
              onClick={toggleLanguageOpen}
              className={`header_nav_national_language ${
                openLanguage ? "active" : ""
              }`}
            >
              <LuEarth /> {i18n.language === "ky" ? "KG" : "RUS"}
              <SlArrowDown
                className={`arrow ${openLanguage ? "rotate" : ""}`}
              />
            </button>

            {openLanguage && (
              <div className="dropdown show">
                <button onClick={() => changeLanguage("ky")}>KG</button>
                <button onClick={() => changeLanguage("ru")}>RUS</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
