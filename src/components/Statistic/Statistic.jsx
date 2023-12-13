import s from './Statistic.module.css';
export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul>
        <li className={s.text}>Good:{good}</li>
        <li className={s.text}>Neutral:{neutral}</li>
        <li className={s.text}>Bad:{bad}</li>
        <li className={s.text}>Total:{total}</li>
        <li className={s.text}>Positive feedback:{positivePercentage}%</li>
      </ul>
    </div>
  );
};
