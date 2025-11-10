import { useState } from "react";
import Banner from "./widgets/banner/Banner";
import Statistics from "./widgets/statistics/Statistics";
import Content from "./widgets/content/Content";
import Card from "./widgets/content/card/Card";
import { Link } from "react-router-dom";
import "./burgerMenu.scss";
import  axiosApi  from "./api/axiosApi";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isPending, error, data } = useQuery({
    queryKey: ["guarantee/get"],
    queryFn: async () => {
      const response = await axiosApi.get("/homepage/sections/");
      return response.data;
    },
  });

  if (isPending) {
    return <div>Зашрузка....</div>;
  }

  console.error("Ошибка при получении данных", error);


  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="homePage">
      <Banner />
        <div className="BurgerMenu">
      <Link to={"/section"}>
        <div className="statistics__burger" onClick={toggleMenu}>
          <div className={`burger-line ${menuOpen ? "open" : ""}`}></div>
          <div className={`burger-line ${menuOpen ? "open" : ""}`}></div>
          <div className={`burger-line ${menuOpen ? "open" : ""}`}></div>
        </div>
      </Link>


        <div className={`burger-menu ${menuOpen ? "active" : ""}`}>
          <Content />
          <div className="content__cards">
            {data?.map((card) => (
                 <Card key={card.id} {...card} />
            ))}
          </div>
        </div>

        <Statistics />
      </div>
    </div>
  );
};

export default HomePage;
