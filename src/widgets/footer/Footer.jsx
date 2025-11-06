import { axiosApi } from "../../api/axiosApi";
import { useQuery } from "@tanstack/react-query";
import instagram from "../../shared/iconnetworks/ri_instagram-fill.svg";
import telagram from "../../shared/iconnetworks/streamline-logos_telegram-logo-1-block.svg";
import vk from "../../shared/iconnetworks/ri_vk-fill.svg";
import "./footer.scss";

const Footer = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ["footer/get"],
    queryFn: async () => {
      const response = await axiosApi.get("/homepage/header-footer/");
      return response.data;
    },
  });

  if (isPending) {
    return <div>Зашрузка....</div>;

  }
  console.log(data);

  console.error("Ошибка при получении данных", error);

  return (
    <div className="footer">
      <div className="footer_top  container">
        <div className="footer_top_content">
          <a href="/" className="footer_top_content_h1"> <img src={data.bottom_logo} alt="" /></a>

          <div className="footer_top_content_partners">
            <h2>Наши партнеры</h2>
            <a  href="#">{data.name}</a>
            <a href="#">{data.name}</a>
            <a href="#">{data.name}</a>
            <a href="#">{data.name}</a>
          </div>

          <div className="footer_top_content_brends">
            <h2>Крупные бренды на сайте</h2>
            <a href="#">{data.name}</a>
            <a href="#">{data.name}</a>
            <a href="#">{data.name}</a>
          </div>

          <div className="footer_top_content_networks">
            <h2>Наши соц.сети</h2>
            <div className="icons">
              <a href="#"><img src={instagram} alt="Instagram" /></a>
              <a href="#"><img src={telagram} alt="Telegram" /></a>
              <a href="#"><img src={vk} alt="VK" /></a>
            </div>
          </div>
        </div>

        <p className="footer_top_content_copyright">
          © 2025 EasyShop — ваш надежный онлайн-магазин. Все права защищены.
        </p>
      </div>
    </div>
  );
}

export default Footer;

