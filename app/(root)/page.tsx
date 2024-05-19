import HeaderBox from '@/components/HeaderBox';
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {

    const loggedIn = { firstName: "Manas", lastName: "Ranjan", email: "manas@gmail.com"};

  return (
    <section className='home'>
        <div className='home-content'>
          <div className="home-header">
              <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || "Guest"}
                subtext="Access and manage your account and transaction efficiently."
              />

              <TotalBalanceBox
                accounts={[]}
                totalBanks={5}
                totalCurrentBalance={1520.05}
              />
          </div>
          RECENT TRANSACTIONS
        </div>

        <RightSideBar
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance: 123.50 },{ currentBalance: 500.50 }]}
        />
    </section>
  )
}

export default Home