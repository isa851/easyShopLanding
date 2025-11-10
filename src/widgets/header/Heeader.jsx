import { useEffect, useState, useRef } from "react";
import { SlArrowDown } from "react-icons/sl";
import { LuEarth } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import axiosApi from "../../api/axiosApi";
import { useQuery } from "@tanstack/react-query";
import "./header.scss";

export default function Header() {
  const [openLanguage, setOpenLanguage] = useState(false);
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef(null);

  const { isPending, error, data } = useQuery({
    queryKey: ["header/get"],
    queryFn: async () => {
      const response = await axiosApi.get("/homepage/header-footer/");
      return response.data;
    },
  });

  if (isPending) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке header</div>;

  const headerData = data[0];

  const toggleLanguageOpen = (e) => {
    e.stopPropagation();
    setOpenLanguage(!openLanguage);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang).then(() => {
      window.location.reload();
    });
    setOpenLanguage(false);
  };

  const currentLang =
    i18n.language === "ru" ? "RU" : i18n.language === "en" ? "EN" : "中國人";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenLanguage(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header_nav container">
        <a className="header_nav_h1" href="/">
          <img className="header_nav_h1_logo" src={headerData.top_logo} alt="" />
        </a>
        <h1 className="header_nav_link">{t("info")}</h1>

        <div className="header_nav_national">
          <div className="dropdown_wrapper" ref={dropdownRef}>
            <button
              className="header_nav_national_language"
              onClick={toggleLanguageOpen}
            >
              <LuEarth />
              {currentLang}
              <SlArrowDown className={`arrow ${openLanguage ? "rotate" : ""}`} />
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
