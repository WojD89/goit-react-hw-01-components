import profileStyles from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={profileStyles.profile}>
      <div className={profileStyles.description}>
        <img src={avatar} alt="User avatar" className={profileStyles.avatar} />
        <p className={profileStyles.name}>{username}</p>
        <p className={profileStyles.tag}>{tag}</p>
        <p className={profileStyles.location}>{location}</p>
      </div>

      <ul className={profileStyles.stats}>
        <li className={profileStyles.item}>
          <span className={profileStyles.label}>Followers </span>
          <span className={profileStyles.quantity}>{stats.followers}</span>
        </li>
        <li className={profileStyles.item}>
          <span className={profileStyles.label}>Views </span>
          <span className={profileStyles.quantity}>{stats.views}</span>
        </li>
        <li className={profileStyles.item}>
          <span className={profileStyles.label}>Likes </span>
          <span className={profileStyles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  statsFollower: PropTypes.number,
  statsViews: PropTypes.number,
  statsLikes: PropTypes.number,
};

export default Profile;
