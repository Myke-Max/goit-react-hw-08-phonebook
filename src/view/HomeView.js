import s from './views.module.css';

export default function Homeview() {
  return (
    <div style={s.container}>
      <h1 style={s.title}>
        Приветственная страница нашего сервиса
        <span role="img" aria-label="Иконка приветствия">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
