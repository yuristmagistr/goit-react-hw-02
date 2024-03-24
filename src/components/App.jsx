import Profile from './Profile.jsx';
import userData from './userData.json';

import "./App.css";

import friends from './friends.json';
import FriendList from './FriendList.jsx';

import transactions from './transactions.json';
import TransactionHistory from './TransactionHistory.jsx';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
