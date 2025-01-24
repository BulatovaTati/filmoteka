import { ErrorMessage } from 'formik';
import s from './ErrorText.module.css';

const FormErrorMessage = ({ name }) => {
  return <ErrorMessage name={name} component="p" className={s.formError} />;
};

export default FormErrorMessage;
