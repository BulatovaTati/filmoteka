import { ErrorMessage } from 'formik';
import s from './SearchBar.module.css';

const ErrorText = ({ name }) => {
  return <ErrorMessage name={name} component="p" className={s.input__error} />;
};

export default ErrorText;
