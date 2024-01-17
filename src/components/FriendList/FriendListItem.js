import friendListItemStyles from './FriendListItem.module.css';
import PropTypes from 'prop-types';


const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={friendListItemStyles.item}>
      <span
        className={`${friendListItemStyles.status} ${
            friendListItemStyles[isOnline ? 'is_active' : 'is_not_active']
        }`}
      >
        {isOnline}
      </span>
      <img
        className={friendListItemStyles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={friendListItemStyles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
      })
    ),
  };

export default FriendListItem;
