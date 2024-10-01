import AnimalPage from "../../../Components/AnimalPage";

const HawksbillTurtle = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }
  return <AnimalPage data={data} />;
};

export default HawksbillTurtle;
