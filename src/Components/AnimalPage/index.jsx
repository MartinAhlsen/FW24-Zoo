const AnimalPage = ({ data }) => {
  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </>
  );
};

export default AnimalPage;
