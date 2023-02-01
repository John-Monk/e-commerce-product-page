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
        <Wrapper>
            <Image onClick={handleNav} className='menu__open btn' src={menu} />
            <nav className={`nav ${nav ? 'nav__open' : ''}`}>
                <Image onClick={handleNav} className='menu__close btn' src={close} />
                <ul className='nav__list'>
                    <li className='nav__list--item'><a href="#">Collections</a></li>
                    <li className='nav__list--item'><a href="#">Men</a></li>
                    <li className='nav__list--item'><a href="#">Women</a></li>
                    <li className='nav__list--item'><a href="#">About</a></li>
                    <li className='nav__list--item'><a href="#">Contact</a></li>
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
        background: ${props => props.theme.colors.white};
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
                color: ${props => props.theme.colors.veryDarkBlue};
            }
        }
    }

    .btn {
        cursor: pointer;
    }
`

export default Nav;
