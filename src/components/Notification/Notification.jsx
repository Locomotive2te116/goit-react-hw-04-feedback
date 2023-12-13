import s from './Notification.module.css';
export const Notification = ({ message }) => {
  return (
    <div className={s.title}>
      <h2>{message}</h2>
    </div>
  );
};
