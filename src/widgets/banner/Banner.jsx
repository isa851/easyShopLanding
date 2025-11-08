import "./banner.scss";
import { axiosApi } from "../../api/axiosApi";
import { useQuery } from "@tanstack/react-query";

const Banner = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["homepage/get"],
    queryFn: async () => {
      const response = await axiosApi.get("/homepage/homepage/");
      return response.data;
    },
  });

  if (isLoading) {
    return <div>Загрузка....</div>;
  }

  if (error) {
    console.error("Ошибка при получении данных", error);
    return <div>Ошибка при загрузке баннера</div>;
  }

  const bannerImage = data?.[0]?.file; // Берём первую картинку из API

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* <div className=""> */}
        <h1 className="banner__title">{data?.[0]?.content}</h1>
        <button className="banner__button">Узнать больше</button>
      {/* </div> */}
    </div>
  );
};

export default Banner;
