import { useQuery } from "@tanstack/react-query";
import Card from "../widgets/content/card/Card";
import Content from "../widgets/content/Content";
import "./sectionPage.scss";
import { axiosApi } from "../api/axiosApi";


const SectionPage = ({goBack}) => {
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



  return (
    <div className="sectionPage">

      <Content goBack={goBack}/>

      <div className="container list">

      {data?.map((card) => (
        <Card key={card.id} {...card} />
      ))}
      </div>
    </div>
  );
}


export default SectionPage;