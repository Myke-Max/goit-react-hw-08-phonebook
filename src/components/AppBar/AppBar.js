import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import s from './appBar.module.css';

export default function AppBar() {
  return (
    <header className={s.header}>
      <Navigation />
      {/* <UserMenu /> */}
      <AuthNav />
    </header>
  );
}
