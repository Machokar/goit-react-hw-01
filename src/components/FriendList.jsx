import clsx from 'clsx';

export const FriendList = ({ friends: { avatar, name, isOnline } }) => {
  const ststclass = clsx('status', {
    'is-online': isOnline,
    'is-offline': !isOnline,
  });
  return (
    <div className="item">
      <img className="avatar" src={avatar} alt="Avatar" width="48" />
      <p className="name">{name}</p>
      <p className={ststclass}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
