import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import close from '../public/icon-close.svg';
import menu from '../public/icon-menu.svg';
import { useState } from 'react';

const Nav = ({toggleOverlay}) => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        toggleOverlay();
    }

    return (
        <Wrapper className={className}>
            <Image onClick={handleNav} className='menu__open btn' src={menu} />
            <nav className={`nav ${nav ? 'nav__open' : ''}`}>
                <Image onClick={handleNav} className='menu__close btn' src={close} />
                <ul className='nav__list'>
                    <li className='nav__list--item'><a onClick={() => setActive('collections')} className={`${ active === 'collections' ? 'active' : 'inactive' }`} href="#">Collections</a></li>
                    <li className='nav__list--item'><a onClick={() => setActive('men')} className={`${ active === 'men' ? 'active' : 'inactive' }`} href="#">Men</a></li>
                    <li className='nav__list--item'><a onClick={() => setActive('women')} className={`${ active === 'women' ? 'active' : 'inactive' }`} href="#">Women</a></li>
                    <li className='nav__list--item'><a onClick={() => setActive('about')} className={`${ active === 'about' ? 'active' : 'inactive' }`} href="#">About</a></li>
                    <li className='nav__list--item'><a onClick={() => setActive('contact')} className={`${ active === 'contact' ? 'active' : 'inactive' }`} href="#">Contact</a></li>
                </ul>
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  .nav {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background: ${(props) => props.theme.colors.white};
    width: 70%;
    padding: 1.5em;
    transform: translateX(-100%);
    transition: 200ms;
    z-index: 2;

    &__open {
      transform: translateX(0);
      transition: 200ms;
    }

    &__list {
      padding-top: 2em;

      &--item {
        padding: 0.5em 0;
        font-size: 1rem;
        font-weight: 600;
        color: ${(props) => props.theme.colors.veryDarkBlue};
      }
    }
  }

  .btn {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    .btn {
      display: none;
    }

    .nav {
      position: unset;
      height: unset;
      background: unset;
      width: unset;
      padding: unset;
      transform: unset;

      &__list {
        display: flex;
        padding: unset;
        gap: 2em;

        &--item {
          padding: unset;
          font-weight: 400;
          font-size: 0.9rem;
        }
      }
    }
  }

  @media screen and (min-width: 900px) {
    .nav {
      &__list {
        &--item {
          color: ${(props) => props.theme.colors.grayBlue};

          a {
            position: relative;

            &::after {
              border-bottom: 4px solid ${props => props.theme.colors.orange};
              width: 100%;
              bottom: 0;
              left: 0;
              transform: translateY(3.1em);
              content: '';
              position: absolute;
              opacity: 0;
            }

            &:hover {
              color: ${props => props.theme.colors.darkGrayBlue};

              &::after {
                opacity: 1;
              }
            }
          }

          .active {
            color: ${props => props.theme.colors.darkGrayBlue};
            &::after {
                opacity: 1;
              }
          }
        }
      }
    }
  }
`;

export default Nav;
