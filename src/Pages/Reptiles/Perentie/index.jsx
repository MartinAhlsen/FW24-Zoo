import AnimalPage from "../../../Components/AnimalPage";

const Perentie = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }
  return <AnimalPage data={data} />;
};

export default Perentie;
