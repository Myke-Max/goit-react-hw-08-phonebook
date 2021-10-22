import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import s from './appBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
