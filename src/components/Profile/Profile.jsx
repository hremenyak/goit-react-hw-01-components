import { PropTypes } from 'prop-types';
import {
  UserImg,
  ProfileWrapper,
  Username,
  ProfileDescription,
  StatsList,
  StatsListItem,
  Quantity,
  Label,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrapper>
      <ProfileDescription>
        <UserImg src={avatar} alt={username} className="avatar" />
        <Username>{username}</Username>
        <p>@{tag}</p>
        <p>{location}</p>
      </ProfileDescription>

      <StatsList>
        <StatsListItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsListItem>
        <StatsListItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsListItem>
        <StatsListItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsListItem>
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
