import AnimalPage from "../../../Components/AnimalPage";

const Echidna = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }
  return <AnimalPage data={data} />;
};

export default Echidna;
