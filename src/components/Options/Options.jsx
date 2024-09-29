import PropTypes from 'prop-types';
import styles from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => (
  <div className={styles.options}>
    <button onClick={() => updateFeedback('good')}>Good</button>
    <button onClick={() => updateFeedback('neutral')}>Neutral</button>
    <button onClick={() => updateFeedback('bad')}>Bad</button>
    {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
  </div>
);

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  resetFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
