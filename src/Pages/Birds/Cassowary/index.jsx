import AnimalPage from "../../../Components/AnimalPage";

const Cassowary = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }
  return <AnimalPage data={data} />;
};

export default Cassowary;
