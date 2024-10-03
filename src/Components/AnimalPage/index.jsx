import PropTypes from "prop-types";
import { useState } from "react";

const AnimalPage = ({ data }) => {
  const [ReadMore, setReadMore] = useState(false);

  const handleClick = () => {
    setReadMore((prevState) => !prevState);
  };

  const descriptionFull = data.description || "";
  const descriptionShort = `${descriptionFull.substring(0, 100)}...`;
  const descriptionFullOrShort = ReadMore ? descriptionFull : descriptionShort;

  return (
    <>
      <h1>{data.name}</h1>
      <p>{descriptionFullOrShort}</p>

      {!ReadMore && <button onClick={handleClick}>Read more</button>}

      {ReadMore && (
        <>
          <div className="readmoreContainer">
            {Object.entries(data).map(([key, value]) => {
              if (key === "description" || key === "link") return null;
              return (
                <div key={key}>
                  {key}: {value}
                </div>
              );
            })}
          </div>
          <button onClick={handleClick}>Read less</button>
        </>
      )}
    </>
  );
};

export default AnimalPage;
