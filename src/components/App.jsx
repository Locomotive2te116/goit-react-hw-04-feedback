import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = ({ good, neutral }) => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.floor(((good + neutral) / total) * 100);
  };

  const positivePercentage = countPositiveFeedbackPercentage();
  const total = countTotalFeedback();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          handleFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statictics">
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};
