import PropTypes from 'prop-types';

import {
	Item, Label, Percentage
} from './Statistics.styled';

export const Statistics = ({ label, percentage }) => {
	return (
		<Item style={{ backgroundColor: getRandomColor(percentage) }}>
			<Label>{label}</Label>
			<Percentage>{percentage}%</Percentage>
		</Item>
	);
};

Statistics.propTypes = {
	label: PropTypes.string,
	percentage: PropTypes.number.isRequired
};

function getRandomColor(percentage) {
	if (percentage > 30) {
		return '#5882FA';
	} else if (percentage > 10) {
		return '#F7819F';
	}
	return '#AC58FA';
}