import { Profile } from './Profile/Profile';
import user from './Profile/user';
import stats from './Statistics/data';
import friends from './FriendList/friends';
import transactions from './TransactionHistory/transactions';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <TransactionHistory transactions={transactions} />
      <FriendList friends={friends} />

      <Statistics title="Upload stats" stats={stats} />

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};
