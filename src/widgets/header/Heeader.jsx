import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { LuEarth } from "react-icons/lu";
import { MdPlace } from "react-icons/md";
import "./header.scss";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    setOpenLanguage(false);
  };


    const toggleLanguageOpen = () => {
      setOpenLanguage(!openLanguage);
      setOpen(false);
    };


  return (
    <header className="header ">
      <div className="header_nav container">
        <a className="header_nav_h1" href="/">
          EasyShop
        </a>
        <h1 className="header_nav_link">Информация</h1>

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
              RU
              <SlArrowDown
                className={`arrow ${openLanguage ? "rotate" : ""}`}
              />
            </button>

            {openLanguage && (
              <div className="dropdown show">
                <button>KG</button>
                <button>RUS</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
