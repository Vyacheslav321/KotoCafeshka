import CatIcon from "../cat-icon/cat-icon";

import "./cat-card.css";

export default function CatCard({ name, about, image, feature }) {
  return (
    <li>
      <div>
        <img url={image} />
        <CatIcon feature={feature} />
      </div>
      <h4>{name}</h4>
      <p>{about}</p>
    </li>
  );
}
