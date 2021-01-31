import { SearchBarStyle } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyle onChange={(event) => props.setQuery(event.target.value)} />
  );
};

export default SearchBar;
