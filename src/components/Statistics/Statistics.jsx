import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  StatList,
  Title,
  StatItem,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper className="statistics">
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(item => (
          <StatItem key={item.id}>
            <span className="label">{item.label}</span>
            <Percentage>{item.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsWrapper>
  );
};

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
