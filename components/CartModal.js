import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import image1 from '../public/image-product-1-thumbnail.jpg';
import Button from './Button';
import del from '../public/icon-delete.svg';

const CartModal = ({total, price, quantity}) => {
    return (
        <Wrapper>
            <div className="title">
                <h3>Cart</h3>
            </div>
            <div className="details">
                    <Image className='thumbnail' src={image1} />
                <div className="details__info">
                    <span className='product__name'>Fall Limited Edition Sneakers</span>
                    <span className='product__price'>${price} x {quantity} <span className='product__total'>${total}</span></span>
                </div>
                <Image src={del} />
            </div>
                <Button>Checkout</Button>
        </Wrapper>
    );
}

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

  .title, .details {
    padding: 1.5em;
  }

  .title {
    border-bottom: 2px solid ${(props) => props.theme.colors.lightGrayBlue};
  }

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
`;

export default CartModal;
