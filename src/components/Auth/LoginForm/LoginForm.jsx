import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { validationSchemaLoginForm } from '../../validationsForm';
import { logIn } from '../../../redux/auth/operations';
import Container from '../../Container/Container';
import FormErrorMessage from '../ErrorText/ErrorText';
import s from './LoginForm.module.css';

const initialValues = { email: '', password: '' };

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <section className={s.login_section}>
      <Container>
        <p className={s.modal_login__title_signIn}>Sing in</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaLoginForm}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={s.modal_login}>
              <div className={s.modal_login__label}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={s.modal_login__input}
                />
                <FormErrorMessage name="email" />
              </div>
              <div className={s.modal_login__label}>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={s.modal_login__input}
                />
                <FormErrorMessage name="password" />
              </div>
              <button type="submit" disabled={isSubmitting} className={s.button_modal_btn}>
                Login
              </button>
              <div className={s.signUp_now}>
                <p>
                  Not a member? <Link to="/register">Sign up Now</Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
};

export default LoginForm;
