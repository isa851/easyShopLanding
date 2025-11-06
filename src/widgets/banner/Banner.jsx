import "./banner.scss";
import bgImage from "../../shared/Desktop-2(3).png";
import { axiosApi } from "../../api/axiosApi";
import { useQuery } from "@tanstack/react-query";

const Banner = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["guarantee/get"],
    queryFn: async () => {
      const response = await axiosApi.get("/homepage/homepage/");
      return response.data;
    },
  });

  console.log(data)

  if (isPending) {
    return <div>Зашрузка....</div>;
  }

  console.error("Ошибка при получении данных", error);

  return (
    <div className="banner " style={{ backgroundImage: `url(${bgImage})` }}>     
    <div className="container">
      {data?.map((item) => (
        <div key={item.id} className="banner__container">
          <h1 className="banner__title">
            {item.content}
          </h1>
          <button className="banner__button">Узнать больше</button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Banner;
