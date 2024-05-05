import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {

    const loggedIn = { firstName: "Manas"};

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
        </div>
    </section>
  )
}

export default Home