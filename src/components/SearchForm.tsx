import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  setSearchTerm: (searchTerm: string) => void;
}

const SearchForm = ({ setSearchTerm }: Props) => {
  const [searchInput, setSearchInput] = useState("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    setSearchTerm(searchInput);
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <label htmlFor="search">Search for a GIF</label>
      <div className="SearchBarButton">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a GIF"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
