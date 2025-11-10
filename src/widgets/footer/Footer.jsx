import  axiosApi  from "../../api/axiosApi";
import { useQuery } from "@tanstack/react-query";
import instagramIcon from "../../shared/iconnetworks/ri_instagram-fill.svg";
import telegramIcon from "../../shared/iconnetworks/streamline-logos_telegram-logo-1-block.svg";
import vkIcon from "../../shared/iconnetworks/ri_vk-fill.svg";
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
    return <div>Загрузка...</div>;
  }

  if (error) {
    console.error("Ошибка при получении данных", error);
    return <div>Ошибка при загрузке футера</div>;
  }

  // Берём первый объект из массива
  const footerData = data[0];

  return (
    <div className="footer">
      <div className="footer_top container">
        <div className="footer_top_content">
          <a href="/" className="footer_top_content_h1">
            <img src={footerData.bottom_logo} alt="Логотип" />
          </a>

          <div className="footer_top_content_partners">
            <h2>Наши партнеры</h2>
            {footerData.partners?.map((partner, index) => (
              <a key={index} href="#">
                {partner.name}
              </a>
            ))}
          </div>

          <div className="footer_top_content_brends">
            <h2>Крупные бренды на сайте</h2>
            {footerData.brands?.map((brand, index) => (
              <a key={index} href="#">
                {brand.name}
              </a>
            ))}
          </div>

          <div className="footer_top_content_networks">
            <h2>Наши соц.сети</h2>
            <div className="icons">
              <a href={footerData.instagram} target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href={footerData.telagram} target="_blank" rel="noreferrer">
                <img src={telegramIcon} alt="Telegram" />
              </a>
              <a href={footerData.vk} target="_blank" rel="noreferrer">
                <img src={vkIcon} alt="VK" />
              </a>
            </div>
          </div>
        </div>

        <p className="footer_top_content_copyright">
          {footerData.bottom_text}
        </p>
      </div>
    </div>
  );
};

export default Footer;
