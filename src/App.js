import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './Home';

import Vis14 from './vis/Vis14';

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

        <Route path='/vis-14' element={<Vis14 />} />
        
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </>
  );
};

export default App;
