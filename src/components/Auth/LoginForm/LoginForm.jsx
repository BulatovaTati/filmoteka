import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchemaLoginForm } from '../../validationsForm';
import { logIn } from '../../../redux/auth/operations';
import s from './LoginForm.module.css';

const initialValues = { email: '', password: '' };

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaLoginForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.modal_login}>
            <p className={s.modal_login__title_signIn}>Sing in</p>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={s.modal_login__input}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className={s.modal_login__label}>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={s.modal_login__input}
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting} className={s.button_modal_btn}>
              Login
            </button>
          </Form>
        )}
      </Formik>
      <div className={s.signUp_now}>
        <p>Not a member?</p>
        <a className={s.signUp_now__link}>Sign up Now</a>
      </div>
    </section>
  );
};

export default LoginForm;
