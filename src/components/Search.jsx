const Search = ({ setSearch }) => {
  return (
    <>
      <input
        type="text"
        className="form-control my-4 w-50"
        placeholder="Search Recipe"
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default Search;
