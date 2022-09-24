import PropTypes from 'prop-types';
import { FriendListUL } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
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
	friends: PropTypes.array.isRequired,
};