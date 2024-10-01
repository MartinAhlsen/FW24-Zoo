import AnimalPage from "../../../Components/AnimalPage";

const Kookaburra = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }
  return <AnimalPage data={data} />;
};

export default Kookaburra;
