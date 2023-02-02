import React from 'react';
import logo from '../public/logo.svg';
import cart from '../public/icon-cart.svg';
import avatar from '../public/image-avatar.png';
import Image from 'next/image';
import styled from 'styled-components';
import Nav from './Nav';

const Header = ({toggleOverlay, toggleCart, quantity}) => {
    return (
        <StyledHeader>
            <div className="left">
                <Nav toggleOverlay={toggleOverlay} />
                <a href="#"><Image className='logo' src={logo} /></a>
            </div>
            <div className="right">
                <a className='right__cart' href="#">
                  <Image className='cart__image' onClick={toggleCart} src={cart} />
                  {quantity ? <span className='quantity'>{quantity}</span> : ''}
                </a>
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

    &__cart {
      position: relative;

      .quantity {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 0.6rem;
        font-weight: 600;
        color: ${props => props.theme.colors.white};
        background: ${props => props.theme.colors.orange};
        width: 1.7em;
        border-radius: 0.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(0.4em, -0.5em);
      }
    }

    &__avatar {
      height: 1.5em;
      width: 1.5em;
    }
  }
`;

export default Header;
