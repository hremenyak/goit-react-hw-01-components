import propTypes from 'prop-types';
import { UserName, Avatar, Status } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt={name} width="48" />
      <UserName>{name}</UserName>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
