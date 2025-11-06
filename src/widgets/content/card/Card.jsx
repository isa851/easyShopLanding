import { Link } from "react-router-dom";


const Card = ({id, name, description, image}) => {
  return (
    <Link  to={`/detail/${id}`} className="card">
      <h1 className="card_h1">{name}</h1>
      <div className="card_content">
        <p className="card_content_p">{description}</p>
        <img className="card_content_img" src={image} alt="logoCard" />
      </div>
    </Link>
  );
};

export default Card;