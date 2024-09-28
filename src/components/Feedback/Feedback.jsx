
import styles from './Feedback.module.css';

const Feedback = ({ feedback, total, positivePercentage }) => {
  return (
    <div className={styles.feedback}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total feedback: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
