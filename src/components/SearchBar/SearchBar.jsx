import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { IoMdSearch } from 'react-icons/io';
import s from './SearchBar.module.css';
import ErrorText from './ErrorText';
import customToast from '../Toast/Toast';
import { setSearchQuery } from '../../redux/movies/slice';

const ERROR_TEXT = 'Oops... enter smt!';

const initialValues = {
  searchQuery: '',
};

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (values.searchQuery === '') {
      customToast('error', ERROR_TEXT);
      return;
    }
    console.log('SearchBar - Dispatching search query:', values.searchQuery);
    dispatch(setSearchQuery(values.searchQuery));

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.input__form}>
        <Field
          className={s.input__header}
          name="searchQuery"
          type="text"
          placeholder="Search films"
        />
        <ErrorText name="searchQuery" />
        <button className={s.input__search_btn} type="submit">
          <IoMdSearch className={s.input__search_icon} size={18} />
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
