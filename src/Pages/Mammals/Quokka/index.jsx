import AnimalPage from "../../../Components/AnimalPage";

const Quokka = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }
  return <AnimalPage data={data} />;
};

export default Quokka;
