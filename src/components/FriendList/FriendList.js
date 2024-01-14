const Friends = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <span className="status">{friend.isOnline}</span>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Friends;