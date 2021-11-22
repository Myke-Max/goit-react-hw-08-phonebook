import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
// import logOut from '../../images/logout';
import authOperations from '../../redux/auth/auth-operations';
import s from './userMenu.module.css';
// const avatar = logOut;

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={s.container}>
      {/* <img src={avatar} alt="" width="32" className={s.avatar} /> */}
      <span className={s.name}>Welcome {name}</span>
      <button
        className={s.logout_button}
        type="button"
        onClick={() => dispatch(authOperations.logout())}
      >
        LogOut
      </button>
    </div>
  );
}
