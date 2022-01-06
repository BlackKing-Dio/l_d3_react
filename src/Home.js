import React from 'react';
import NavLink from './components/NavLink';

//PLEASE DONT FORMAT
const Home = () => {
  return (
    <nav>
      <ul>
        <NavLink link='/vis-01' text='Vis 01 - Ball' />
        {/* <NavLink link='/vis-02' text='Vis 02 - Ball' /> */}
        <NavLink link='/vis-03' text='Vis 03 - Ball' />
        <NavLink link='/vis-04' text='Vis 04 - Ball' />
      </ul>
    </nav>
  );
};

export default Home;
