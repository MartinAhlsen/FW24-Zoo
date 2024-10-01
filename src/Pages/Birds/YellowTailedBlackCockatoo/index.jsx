import AnimalPage from "../../../Components/AnimalPage";

const YellowTailedBlackCockatoo = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }
  return <AnimalPage data={data} />;
};

export default YellowTailedBlackCockatoo;
