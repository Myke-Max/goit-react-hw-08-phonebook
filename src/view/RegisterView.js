import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import s from './views.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.newUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Registration Page</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input className={s.input} type="text" value={name} name="name" onChange={handleChange} />
        </label>

        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={s.enter_button} type="submit">
          Register Now!
        </button>
      </form>
    </div>
  );
}
