import css from './Friendlist.module.css';
import { Frienditem } from './Frienditem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(friends => (
        <Frienditem key={friends.id} friends={friends} />
      ))}
    </ul>
  );
};
