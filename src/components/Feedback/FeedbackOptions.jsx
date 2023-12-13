import s from './Feedback.module.css';
export const FeedbackOptions = ({ options, handleFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={s.button}
          type="button"
          key={option}
          onClick={() => handleFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
