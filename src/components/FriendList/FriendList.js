import friendStyle from './FriendList.module.css';
import PropTypes from 'prop-types';

const Friends = ({ friends }) => {
  return (
    <ul className={friendStyle.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={friendStyle.item}>
          <span
            className={`${friendStyle.status} ${
              friendStyle[
                friend.isOnline ? 'is_active' : 'is_not_active'
              ]
            }`}
          >
            {friend.isOnline}
          </span>
          <img
            className={friendStyle.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={friendStyle.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default Friends;
