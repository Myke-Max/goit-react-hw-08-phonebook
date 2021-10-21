import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './views.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch();
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Login Page</h1>

      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Email
          <input type="email" name="email" value={email} onChange={handleChange} />
        </label>

        <label>
          Password
          <input type="password" name="password" value={password} onChange={handleChange} />
        </label>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
