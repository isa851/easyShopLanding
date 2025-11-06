import one from "../../shared/iconsStatistics/fluent_people-community-32-filled.svg";
import two from "../../shared/iconsStatistics/streamline-ultimate_e-commerce-touch-buy-bold.svg";
import three from "../../shared/iconsStatistics/fluent-mdl2_product-variant.svg";
import { useQuery } from "@tanstack/react-query";
import { axiosApi } from "../../api/axiosApi";
import "./statistics.scss";

const Statistics = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["statics/get"],
    queryFn: async () => {
      const response = await axiosApi.get("/homepage/statistics");
      return response.data;
    },
  });

  if (isPending) {
    return <div>Зашрузка....</div>;
  }

  console.error("Ошибка при получении данных", error);

  return (
    <div className="statistics">
      <div className="statistics__title">
        <h1>Статистика пользователей и товаров</h1>
      </div>
      {data.map((item) => (
        <div key={item.id} className="statistics__card">
          <div className="statistics__card_one statistics__card_item">
            <img className="statistics__card_img" src={one} alt="one" />
            <h2 className="statistics__card_h2">{item?.users_count}</h2>
            <p className="statistics__card_p">Пользователи</p>
          </div>

          <div className="statistics__card_two statistics__card_item">
            <img className="statistics__card_img" src={two} alt="two" />
            <h2 className="statistics__card_h2">
              {item?.bought_products_count}
            </h2>
            <p className="statistics__card_p">Купили товары</p>
          </div>

          <div className="statistics__card_three statistics__card_item">
            <img className="statistics__card_img" src={three} alt="three" />
            <h2 className="statistics__card_h2">
              {item?.total_products_count}
            </h2>
            <p className="statistics__card_p">Всего товаров</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
