import React from 'react';
import logo from '../public/logo.svg';
import cart from '../public/icon-cart.svg';
import avatar from '../public/image-avatar.png';
import Image from 'next/image';
import styled from 'styled-components';
import Nav from './Nav';

const Header = ({toggleOverlay}) => {
    return (
        <StyledHeader>
            <div className="left">
                <Nav toggleOverlay={toggleOverlay} />
                <a href="#"><Image className='logo' src={logo} /></a>
            </div>
            <div className="right">
                <a href="#"><Image className='right__cart' src={cart} /></a>
                <a href="#"><Image className='right__avatar' src={avatar} /></a>
            </div>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  .left {
    display: flex;
    align-items: center;
    gap: 1em;

    .logo {
      height: 1.4em;
      width: auto;
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 1em;

    &__avatar {
      height: 1.5em;
      width: 1.5em;
    }
  }
`;

export default Header;
