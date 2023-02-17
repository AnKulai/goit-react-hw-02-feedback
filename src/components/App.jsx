import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  };

  countPositiveFeedbackPercentage = () => {
    const result = (this.state.good / this.countTotalFeedback()) * 100;
    return result.toFixed(1);
  };

  onLeaveFeedback = ({ target }) => {
    const option = target.dataset.type;
    // this.setState({ [option]: ++this.state[option] });
  };

  render() {
    return (
      <div
        style={{
          maxWidth: '1200px',
          margin: 'auto',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <Feedback state={this.state} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statictics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
