import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import CartItem from './CartItem';

const CartModal = ({ total, price, quantity, clearCart }) => {
  return (
    <Wrapper>
      <div className="title">
        <h3>Cart</h3>
      </div>
      <div className="item__container">
        {quantity === 0 ? (
          <p className="empty__message">Your cart is empty.</p>
        ) : (
          <>
            <CartItem clearCart={clearCart} total={total} price={price} quantity={quantity} />
          </>
        )}
        {quantity ? <Button>Checkout</Button> : ''}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.white};
  width: 22.5em;
  height: 16em;
  border-radius: 0.5em;
  -webkit-box-shadow: 0px 0px 21px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 21px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 21px -10px rgba(0, 0, 0, 0.75);

  .item__container {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .empty__message {
      font-size: 1.1em;
      font-weight: 600;
      color: ${(props) => props.theme.colors.darkGrayBlue};
      text-align: center;
    }
  }

  .title,
  .details {
    padding: 1.5em;
  }

  .title {
    border-bottom: 2px solid ${(props) => props.theme.colors.lightGrayBlue};
  }
`;

export default CartModal;
