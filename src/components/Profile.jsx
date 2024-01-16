export const Profile = ({ name, tag, location, stats, image }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={image} alt="User avatar" className="avatar-name" />
        <p className="main-name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="varibles">
          <span className="label">Followers</span>
          <span className="value">{stats.followers}</span>
        </li>
        <li className="varibles">
          <span className="label">Views</span>
          <span className="value">{stats.views}</span>
        </li>
        <li className="varibles">
          <span className="label">Likes</span>
          <span className="value">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
