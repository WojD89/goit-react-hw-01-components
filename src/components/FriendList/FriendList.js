import friendStyle from './FriendList.module.css';

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

export default Friends;
