import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './views.module.css';

export default function RegisterView() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setUserName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  return (
    <div>
      <h1>Registration Page</h1>
      <form>
        <label>
          Name
          <input type="text" value={userName} name="name" onChange={handleChange} />
        </label>
        <label>
          Email
          <input type="email" value={email} name="email" onChange={handleChange} />
        </label>
        <label>
          Password
          <input type="password" name="password" value={password} onChange={handleChange} />
        </label>

        <button type="submit">Register Now!</button>
      </form>
    </div>
  );
}
