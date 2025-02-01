import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import FormErrorMessage from '../ErrorText/ErrorText';

import { validationSchemaRegistrationForm } from '../../validationsForm';
import { register } from '../../../redux/auth/operations';

import s from './RegistrationForm.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div>
      <p className={s.modal_registration__title_signUp}>Registration</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaRegistrationForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.modal_registration}>
            <div className={s.modal_registration__label}>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className={s.modal_registration__input}
              />
              <FormErrorMessage name="name" />
            </div>
            <div className={s.modal_registration__label}>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={s.modal_registration__input}
              />
              <FormErrorMessage name="email" />
            </div>
            <div className={s.modal_registration__label}>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={s.modal_registration__input}
              />
              <FormErrorMessage name="password" />
            </div>
            <button type="submit" disabled={isSubmitting} className={s.button_modal_btn}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
