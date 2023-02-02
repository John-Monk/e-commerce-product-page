import React from 'react';
import styled from 'styled-components';

const Button = ({children}) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    all: unset;
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.orange};
    width: 90%;
    margin: 0 auto;
    height: 3.5em;
    border-radius: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export default Button;
