import "./deteil.scss";
import { axiosApi } from "../../api/axiosApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Deteil = () => {
  const params = useParams();
   const { isPending, error, data } = useQuery({
    queryKey: ["sectionsDetail/get"],
    queryFn: async () => {
      const response = await axiosApi.get(`/homepage/sections/${params.id}`);
      return response?.data?.contents;
    },
  });
  
  if(isPending){
    return <div>
      Загрузка....
    </div>
  };
  
  console.error('Ошибка при получении данных', error);

  return (
    <section className="guarantee">
      <div className="guarantee__container">
        <h2 className="guarantee__title"></h2>

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