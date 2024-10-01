import AnimalPage from "../../../Components/AnimalPage";

const FrillNeckedLizard = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }
  return <AnimalPage data={data} />;
};

export default FrillNeckedLizard;
