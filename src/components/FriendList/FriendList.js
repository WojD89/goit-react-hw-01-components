import friendListStyles from './FriendList.module.css';
//import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';


const Friends = ({ friends }) => {
  return (
    <ul className={friendListStyles.friendList}>
            {friends.map(friend => (
            <FriendListItem
            name={friend.name}
            avatar={friend.avatar}
            isOnline = {friend.isOnline}
            key={friend.id}
            />
            ))}
    </ul>
  );
};


export default Friends;
