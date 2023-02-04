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
                <button className='btn' onClick={decreaseQuantity}><Image className='minus' src={minus} /></button>
                <span className='display'>{quantity}</span>
                <button className='btn' onClick={increaseQuantity}><Image className='plus' src={plus} /></button>
              </div>
              <Button onClick={increaseQuantity} className='add' ><CartIcon className='icon' />Add to cart</Button>
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
        background: ${(props) => props.theme.colors.lightGrayBlue};
        border-radius: 0.5em;
        justify-content: space-between;

        .btn {
          display: flex;
          padding: 1.5em;
          align-items: center;

          &:hover {
            opacity: 0.8;
          }

          &:active {
            opacity: 0.5;
          }
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

  @media screen and (min-width: 500px) {
    .product {

      &__pricing {
        justify-content: flex-start;
        gap: 1em;
      }

      &__purchase {
        flex-direction: row;

        .quantity, .add {
          flex-basis: 50%;
        }
      }
    }
  }

  @media screen and (min-width: 900px) {
    .product {
      width: 28em;
      padding: unset;
      gap: 0.5em;

      &__model {
        font-size: 2.9rem;
        font-weight: 600;
      }

      &__info {
        font-size: 1rem;
        padding: 1em 0;
      }

      &__pricing {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25em;

        .original {
          font-size: 0.9rem;
        }
      }

      &__purchase {
        flex-direction: row;
        align-items: center;
        padding-top: 1em;

        .quantity {
          flex-basis: 40%;
        }

        .add {
          flex-basis: 60%;
        }
      }
    }
  }
`;

export default ProductCard;