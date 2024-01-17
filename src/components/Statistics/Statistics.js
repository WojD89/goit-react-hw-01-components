import statisticsStyle from './Statistics.module.css'
import PropTypes from 'prop-types';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={statisticsStyle.statistics}>
      {title && <h2 className={statisticsStyle.title}>{title}</h2>}
      <ul className={statisticsStyle.statList}>
        {stats.map(item => (
          <li key={item.id} className={statisticsStyle.item}
          style={{ backgroundColor: getRandomHexColor()}}>
            <span className={statisticsStyle.label}>{item.label} </span>
            <span className={statisticsStyle.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};