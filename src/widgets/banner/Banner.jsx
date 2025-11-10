import  axiosApi from "../../api/axiosApi";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";  
import { useTranslation } from "react-i18next";
import "./banner.scss";

const Banner = () => {
  const { t } = useTranslation();

  const { isLoading, error, data } = useQuery({
    queryKey: ["homepage/get"],
    queryFn: async () => {
      const response = await axiosApi.get("/homepage/homepage/");
      return response.data;
    },
  });

  if (isLoading) return <div>{t("loading")}</div>;
  if (error) {
    console.error("Ошибка при получении данных", error);
    return <div>{t("error_loading_banner")}</div>;
  }

  const banner = data?.[0];
  const fileUrl = banner?.file;
  const isVideo = fileUrl?.endsWith(".mp4") || fileUrl?.endsWith(".webm") || fileUrl?.endsWith(".ogg");

  return (
    <div className="banner">
      {isVideo ? (
        <video className="banner__video" autoPlay muted loop playsInline>
          <source src={fileUrl} type="video/mp4" />
          {t("video_not_supported")}
        </video>
      ) : (
        <div
          className="banner__background"
          style={{ backgroundImage: `url(${fileUrl})` }}
        />
      )}

      <div className="banner__content">
        <h1 className="banner__title">{t(banner?.content)}</h1>
        <Link to="/section">
          <button className="banner__button">Узнать больше </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
