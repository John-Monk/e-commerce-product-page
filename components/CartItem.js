import React from 'react';
import styled from 'styled-components';
import image1 from '../public/image-product-1-thumbnail.jpg';
import del from '../public/icon-delete.svg';
import Image from 'next/image';

const CartItem = ({quantity, price, total, clearCart}) => {
    return (
      <Wrapper>
        <div className="details">
          <Image className="thumbnail" src={image1} />
          <div className="details__info">
            <span className="product__name">Fall Limited Edition Sneakers</span>
            <span className="product__price">
              ${price}.00 x {quantity}{' '}
              <span className="product__total">${total}.00</span>
            </span>
          </div>
          <Image src={del} onClick={clearCart}/>
        </div>
      </Wrapper>
    );
}

export default CartItem;

const Wrapper = styled.section`

.details {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .thumbnail {
      width: 3.5em;
      height: 3.5em;
      border-radius: 0.5em;
    }

    .details__info {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      font-weight: 400;
      color: ${props => props.theme.colors.grayBlue};

      .product__total {
        font-weight: 600;
        color: ${props => props.theme.colors.black};
      }
    }
  }
`