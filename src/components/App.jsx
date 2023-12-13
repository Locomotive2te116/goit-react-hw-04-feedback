import React from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
// let total = 0;

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.floor(((good + neutral) / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            handleFeedback={this.handleFeedback}
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
  }
}
