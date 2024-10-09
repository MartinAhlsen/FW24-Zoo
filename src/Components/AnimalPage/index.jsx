import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./AnimalPage.module.css";

const AnimalPage = ({ data }) => {
  const [ReadMore, setReadMore] = useState(false);

  const handleClick = () => {
    setReadMore((prevState) => !prevState);
  };

  const descriptionFull = data.description || "";
  const descriptionShort = `${descriptionFull.substring(0, 100)}...`;

  return (
    <div>
      {" "}
      {!ReadMore ? (
        <div>
          <img src={data.img} alt={data.name} width="100px" height="100px" />
          <h1>{data.name}</h1>
          <p>{descriptionShort}</p>
          <p>Food: {data.food}</p>
          <p>
            It belongs to the{" "}
            <a className={styles.categoryLink} href={`/${data.group}s`}>
              {data.group}
            </a>{" "}
            group
          </p>
          <button onClick={handleClick}>Read more</button>
        </div>
      ) : (
        <div>
          {Object.entries(data).map(([key, value]) => {
            if (key === "name") return <h1>{value}</h1>;
            if (key === "link") return null;
            if (key === "img")
              return (
                // <div className={styles.imageContainer}>
                <img
                  key={key}
                  src={value}
                  alt={data.name}
                  height="300px"
                  width="300px"
                />
                // </div>
              );
            return (
              <div key={key}>
                {key}: {value}
              </div>
            );
          })}
          <button onClick={handleClick}>Read less</button>
        </div>
      )}
    </div>
  );
};

export default AnimalPage;
