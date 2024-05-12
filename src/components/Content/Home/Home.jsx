import React from 'react';
import Navigation from '../../Navigation/Navigation';
import LandingPage from '../../LandingPage/LandingPage';


function Home() {
  return (
    <>
    <div className='navbar'>
        <Navigation/>
    </div>

    <LandingPage/>
    </>
  )
}

export default Home