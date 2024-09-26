import AnimalPage from "../../../Components/AnimalPage";

const YellowTailedBlackCockatoo = ({ data }) => {
  console.log(data);
  console.log("cook");
  return <AnimalPage data={data} />;
};

export default YellowTailedBlackCockatoo;
