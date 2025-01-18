// import LoginForm from '../components/Auth/LoginForm/LoginForm';

// const Login = () => {
//   return (
//     <>
//       <LoginForm />
//     </>
//   );
// };

// export default Login;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../firebaseAuth';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    login(dispatch, email, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
