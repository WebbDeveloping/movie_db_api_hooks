import React from 'react';
import styled from 'styled-components';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      min-height: 0px;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className='header-content'>
      <img src={RMDBLogo} alt='RMDB-logo' />
      <img src={TMDBLogo} alt='TMDB-logo' />
    </div>
  </StyledHeader>
);

export default Header;
