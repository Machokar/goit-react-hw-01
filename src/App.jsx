import './App.css';
import { FriendList } from './components/FriendList';
import { Profile } from './components/Profile';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { TransactionHistory } from './components/TransactionHistory';
const userData = {
  username: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <div className="friends-model">
        {friends.map(friends => (
          <FriendList key={friends.id} friends={friends} />
        ))}
      </div>
      <div>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {transactions.map(transactions => (
          <TransactionHistory
            key={transactions.id}
            transactions={transactions}
          />
        ))}
      </div>
    </>
  );
}
