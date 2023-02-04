import React from 'react';
import styled from 'styled-components';
import plus from '../public/icon-plus.svg';
import minus from '../public/icon-minus.svg';
import Image from 'next/image';
import Button from './Button';
import CartIcon from './CartIcon';

const ProductCard = ({quantity, increaseQuantity, decreaseQuantity, price}) => {

    return (
        <Wrapper>
          <section className="product">
            <span className="product__brand">sneaker company</span>
            <h1 className="product__model">Fall Limited Edition Sneaker</h1>
            <p className="product__info">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className="product__pricing">
              <span className="price">${price}.00<span className="discount">50%</span></span>
              <span className="original">${price * 2}.00</span>
            </div>
            <div className="product__purchase">
              <div className="quantity">
                <button className='btn' onClick={decreaseQuantity}><Image src={minus} /></button>
                <span className='display'>{quantity}</span>
                <button className='btn' onClick={increaseQuantity}><Image src={plus} /></button>
              </div>
              <Button className='add' ><CartIcon className='icon' />Add to cart</Button>
            </div>
          </section>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  .product {
    display: flex;
    flex-direction: column;
    padding: 1em 1.5em;
    gap: 1em;

    &__brand {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      color: ${(props) => props.theme.colors.orange};
    }

    &__model {
      font-size: 1.7rem;
    }

    &__info {
      line-height: 1.7;
      color: ${(props) => props.theme.colors.darkGrayBlue};
      font-size: 0.95rem;
    }

    &__pricing {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price {
        font-weight: 600;
        font-size: 1.7rem;
        display: flex;
        align-items: center;
        gap: 0.5em;
      }

      .discount {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.orange};
        background: ${(props) => props.theme.colors.lightOrange};
        padding: 0.2em 0.5em;
        border-radius: 0.4em;
      }

      .original {
        font-weight: 600;
        color: ${(props) => props.theme.colors.grayBlue};
        text-decoration: line-through;
      }
    }

    &__purchase {
      display: flex;
      flex-direction: column;
      gap: 1em;

      .quantity {
        display: flex;
        align-items: center;
        height: 4em;
        background: ${props => props.theme.colors.lightGrayBlue};
        border-radius: 0.5em;
        justify-content: space-between;
        padding: 0 1em;

        .btn {
          display: flex;
        }

        .display {
          font-weight: 600;
        }
      }
    }
    .add {
      width: 100%;
      gap: 0.8em;
      align-items: center;
    }
  }
`;

export default ProductCard;