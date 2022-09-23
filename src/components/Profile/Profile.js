import PropTypes from 'prop-types';
import {
	Avatar,
	Description,
	Label, List, Location,
	ProfileCard,
	Quantity,
	Stats,
	Tag,
	Username
} from './Profile.styled';
export const Profile = ({ user: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
	return (
		<ProfileCard>
			<Description>
				<Avatar
					src={avatar}
					alt="User avatar"
				/>
				<Username>{username}</Username>
				<Tag>@{tag}</Tag>
				<Location>{location}</Location>
			</Description>

			<Stats>
				<List>
					<Label>Followers</Label>
					<Quantity>{followers}</Quantity>
				</List>
				<List>
					<Label>Views</Label>
					<Quantity>{views}</Quantity>
				</List>
				<List>
					<Label>Likes</Label>
					<Quantity>{likes}</Quantity>
				</List>
			</Stats>
		</ProfileCard>
	);
};

Profile.propTypes = {
	user: PropTypes.shape({
		username: PropTypes.string.isRequired,
		tag: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
		stats: PropTypes.shape({
			followers: PropTypes.number.isRequired,
			views: PropTypes.number.isRequired,
			likes: PropTypes.number.isRequired,
		})
	}),
};