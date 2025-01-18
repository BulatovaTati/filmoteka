// import RegistrationForm from '../components/Auth/RegistrationForm/RegistrationForm';

// const Register = () => {
//   return (
//     <>
//       <RegistrationForm />
//     </>
//   );
// };

// export default Register;
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../firebaseAuth';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = e => {
    e.preventDefault();
    register(dispatch, email, password);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
