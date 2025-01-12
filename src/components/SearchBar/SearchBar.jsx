import { IoMdSearch } from 'react-icons/io';
import s from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <>
      <form className={s.input__form}>
        <input
          className={s.input__header}
          name="searchQuery"
          type="text"
          placeholder="Search films"
        />
        <button className={s.input__search_btn} aria-label="submit-button" type="submit">
          <IoMdSearch className={s.input__search_icon} size={16} />
        </button>
      </form>
      <p className={s.input__error}>Please enter a movie name to search.</p>
    </>
  );
};

export default SearchBar;
