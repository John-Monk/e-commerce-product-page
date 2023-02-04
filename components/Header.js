import React from 'react';
import logo from '../public/logo.svg';
import cart from '../public/icon-cart.svg';
import avatar from '../public/image-avatar.png';
import Image from 'next/image';
import styled from 'styled-components';
import Nav from './Nav';

const Header = ({toggleOverlay, toggleCart, quantity}) => {

    return (
        <Wrapper>
            <header className='container'>
              <div className="left">
                  <a href="#"><Image className='logo' src={logo} /></a>
              </div>
              <div className="nav__container">
                <Nav toggleOverlay={toggleOverlay} />
              </div>
              <div className="right">
                  <div className='right__cart'>
                    <button>
                      <Image className='cart__image' onClick={toggleCart} src={cart} />
                    </button>
                    {quantity ? <span className='quantity'>{quantity}</span> : ''}
                  </div>
                  <button className="right__avatar">
                    <a href="#"><Image className='image' src={avatar} /></a>
                  </button>
              </div>
            </header>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 1em;
    gap: 1em;

    .left {
      display: flex;
      align-items: center;
      flex: 1;

      .logo {
        height: 1.4em;
        width: auto;
      }
    }

    .nav__container {
      order: -1;
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
          color: ${(props) => props.theme.colors.white};
          background: ${(props) => props.theme.colors.orange};
          width: 1.7em;
          border-radius: 0.5em;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(0.4em, -0.5em);
          user-select: none;
          pointer-events: none;
        }
      }

      &__avatar {
        .image {
          height: 1.5em;
          width: 1.5em;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    header {
      justify-content: space-between;
      align-items: center;

      .left {
        flex: unset;
      }

      .nav__container {
        order: unset;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    header {
      .nav__container {
        flex: 1;
        margin-left: 1.5em;
      }
    }
  }
`;

export default Header;
