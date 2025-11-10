import  axiosApi  from "../../api/axiosApi";
import { useQuery } from "@tanstack/react-query";
import { useParams, useLocation } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import "./deteil.scss";

const Deteil = ({goBack}) => {
  const params = useParams();
  const location = useLocation();
  const sectionName = location.state?.sectionName || "Раздел";

  const { isPending, error, data } = useQuery({
    queryKey: ["sectionsDetail/get", params.id],
    queryFn: async () => {
      const response = await axiosApi.get(`/homepage/sections/${params.id}`);
      return response?.data?.contents;
    },
  });

  if (isPending) {
    return <div>Загрузка....</div>;
  }

  if (error) {
    console.error("Ошибка при получении данных", error);
  }

  return (
    <section className="container guarantee">
      <div className="guarantee__container">
      <div className="nav-row">
      <button className="goBack" onClick={goBack}><GoArrowLeft className="iconBack" /></button>
        <h2 className="guarantee__title"> Раздел: {sectionName}</h2>
      </div>

        {data?.map((item) => (
          <div key={item.id} className="guarantee__item">
            <div className="guarantee__content">
              <h3 className="guarantee__subtitle">{item.title}</h3>
              <p className="guarantee__text">{item.description}</p>
            </div>
            <div className="guarantee__image-wrapper">
              <img
                className="guarantee__image"
                src={item.image}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deteil;
