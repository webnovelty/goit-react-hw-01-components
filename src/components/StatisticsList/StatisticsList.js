import PropTypes from 'prop-types';
import { StatisticList, StatisticTitle, StatisticWrapper } from './StatisticsList.styled';
import { Statistics } from 'components/Statistics/Statistics';
export const StatisticsList = ({ title, stats}) => {
	return (
		<StatisticWrapper>
			{title ? <StatisticTitle>{title}</StatisticTitle>: null}
		<StatisticList>
			
			{
					stats.map(({ id, label, percentage }) => (
					<Statistics key={id} label={label} percentage={percentage}/>
				))}
			</StatisticList>
		</StatisticWrapper>
	);
};
StatisticsList.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.array.isRequired,
};