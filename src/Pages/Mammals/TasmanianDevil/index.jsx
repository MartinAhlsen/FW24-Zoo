import AnimalPage from "../../../Components/AnimalPage";

const TasmanianDevil = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }
  return <AnimalPage data={data} />;
};

export default TasmanianDevil;
