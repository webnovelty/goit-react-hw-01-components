import user from '../../data/user';
import data from '../../data/data';
import friends from '../../data/friends';
import transactions from '../../data/transactions';

import { Profile } from '../Profile/Profile';
import { StatisticsList } from '../StatisticsList/StatisticsList';
import { ComponentsContainer, UnderContainer } from './App.styled';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <>
      <ComponentsContainer>
        <UnderContainer>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <StatisticsList title="Upload stats" stats={data} />
          <TransactionHistory items={transactions} />
        </UnderContainer>

        <FriendList friends={friends} />
      </ComponentsContainer>
    </>
  );
};
