const CategoryPage = ({ currentPage }) => {
  return (
    <>
      <h1>{currentPage.name}</h1>
      <p>{currentPage.description}</p>
    </>
  );
};

export default CategoryPage;
