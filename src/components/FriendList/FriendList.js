import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { FriendListUL } from './FriendList.styled';
export const FriendList = ({ friends }) => {
	return (
		<FriendListUL>

			{
				friends.map(({ avatar, name, isOnline, id }) => (
					<FriendListItem
						key={id}
						avatar={avatar}
						name={name}
						isOnline={isOnline} />
				))}
		</FriendListUL>
	);
};
FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({ id: PropTypes.number.isRequired, }),

	),
};