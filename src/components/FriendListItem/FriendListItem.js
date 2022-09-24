import PropTypes from 'prop-types';
import { AiFillApi } from "react-icons/ai";
import {
	FriendItem, FriendStatus, FriendImg, FriendName
} from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
	return (
		<FriendItem>
			<FriendStatus selected={isOnline === true}><AiFillApi size={24} /></FriendStatus>
			<FriendImg src={avatar} alt="User avatar" width="48" />
			<FriendName>{name}</FriendName>
		</FriendItem>
	);
};

FriendListItem.propTypes = {
	
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
};