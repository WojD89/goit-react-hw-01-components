import statisticsStyle from './Statistics.module.css'

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={statisticsStyle.statistics}>
      {title?.length > 0 && <h2 className={statisticsStyle.title}>{title}</h2>}
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
