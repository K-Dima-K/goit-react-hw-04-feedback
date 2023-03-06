import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <div>
      <ul className={css.stat_list}>
        <li>
          <p className={css.stat_text}>Good: {good}</p>
        </li>
        <li>
          <p className={css.stat_text}>Neutral: {neutral}</p>
        </li>
        <li>
          <p className={css.stat_text}>Bad: {bad}</p>
        </li>
        <li>
          <p className={css.stat_text}>Total: {total}</p>
        </li>
        <li>
          <p className={css.stat_text}>
            Positive Feedback: {positivePercentage}%
          </p>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
