import s from './views.module.css';

export default function Homeview() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Welcome to our contact service</h1>

      <span className={s.slogan}>We know you will like it</span>
    </div>
  );
}
