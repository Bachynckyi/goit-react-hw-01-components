import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Friends from './Friends/Friends';
import Transactions from './Transactions/Transactions';


import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json"

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#f5f4fa',
      }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />

      <Statistics title="UPLOAD STATS" stats={data} />
      <Statistics stats={data} />

      <Friends friends={friends} />

      <Transactions transactions={transactions} />

      </div>
    );
};
