import CatCard from "../../ui/cat-card/cat-card";

import "./CatList.css";

export default function CatList({stars}) {
  return (
    <section className="cat-list">
      <ul>
        {stars.map(({ id, name, about, image, feature }) => (
          <CatCard
            key={id}
            name={name}
            about={about}
            image={image}
            feature={feature}
          />
        ))}
      </ul>
    </section>
  );
}
