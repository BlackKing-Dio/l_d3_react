import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './Home';

import Vis01 from './vis/Vis01';
// import Vis02 from './vis/Vis02';
import Vis03 from './vis/Vis03';
import Vis04 from './vis/Vis04';

const HomeLink = styled(Link)`
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 100;
`;

const App = () => {
  document.getElementById('fcc_test_suite_wrapper').style.display = 'none';

  return (
    <>
      <HomeLink to='/'>Home</HomeLink>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vis-01' element={<Vis01 />} />
        {/* <Route path='/vis-02' element={<Vis02 />} /> */}
        <Route path='/vis-03' element={<Vis03 />} />
        <Route path='/vis-04' element={<Vis04 />} />
        
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </>
  );
};

export default App;
