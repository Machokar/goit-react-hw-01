import css from './Frienditem.module.css';
import clsx from 'clsx';
export const Frienditem = ({ friends: { avatar, name, isOnline } }) => {
  const ststclass = clsx('status', {
    'is-online': isOnline,
    'is-offline': !isOnline,
  });
  return (
    <li>
      <div className={css.item}>
        <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
        <p className={css.name}>{name}</p>
        <p className={ststclass}>{isOnline ? 'Online' : 'Offline'}</p>
      </div>
    </li>
  );
};
