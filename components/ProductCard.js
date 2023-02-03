import React from 'react';
import styled from 'styled-components';
import plus from '../public/icon-plus.svg';
import minus from '../public/icon-minus.svg';
import Image from 'next/image';
import Button from './Button';
import CartIcon from './CartIcon';

const ProductCard = ({quantity, increaseQuantity, decreaseQuantity}) => {

    return (
        <Wrapper>
            <div className="product">
                <section className="product__info">
                    <span className="product__info--brand">sneaker company</span>
                    <h1 className="product__info--title">Fall Limited Edition Sneakers</h1>
                    <p className="product__info--text">  These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                </section>
                <section className="product__purchase">
                    <div className="product__purchase--pricing">
                        <span className="price">$125.00 <span className='discount'>50%</span></span><span className="original__price">$250.00</span>
                    </div>
                    <div className="purchase">
                      <div className="quantity">
                          <button onClick={decreaseQuantity} className="minus"><Image src={minus} /></button>
                          <div className="display">{quantity}</div>
                          <button onClick={increaseQuantity} className="plus"><Image src={plus} /></button>
                      </div>
                      <div className='button__container'>
                        <Button onClick={increaseQuantity}><CartIcon />Add to cart</Button>
                      </div>
                    </div>
                </section>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  .product {
    display: flex;
    flex-direction: column;
    padding: 1.5em;
    gap: 1em;

    &__info {
      display: flex;
      flex-direction: column;
      gap: 1em;

      &--brand {
        color: ${(props) => props.theme.colors.orange};
        text-transform: uppercase;
        font-weight: 600;
        font-size: 0.75rem;
        letter-spacing: 0.1em;
      }

      &--title {
        font-size: 1.7rem;
      }

      &--text {
        font-size: 0.9rem;
        line-height: 1.6;
        color: ${(props) => props.theme.colors.darkGrayBlue};
      }
    }

    &__purchase {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 1em;
      flex-wrap: wrap;

      &--pricing {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .original__price {
          font-weight: 600;
          color: ${(props) => props.theme.colors.grayBlue};
          text-decoration: line-through;
        }

        .price {
          font-weight: 600;
          font-size: 1.8rem;
          display: flex;
          align-items: center;
          gap: 0.5em;

          .discount {
            font-size: 1rem;
            color: ${(props) => props.theme.colors.orange};
            background: ${(props) => props.theme.colors.lightOrange};
            padding: 0.2em 0.5em;
          }
        }
      }

      .purchase {
        width: 100%;

        .button__container {
            width: 100%;
          }


        .quantity {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1em;
          width: 100%;
          background: ${(props) => props.theme.colors.lightGrayBlue};

          .display {
            font-weight: 600;
          }

          .minus,
          .plus {
            all: unset;
            cursor: pointer;
            width: 1.5em;
            height: 1.5em;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }

  @media screen and (min-width: 640px) {
    .product {
      flex-direction: row;
      padding: 2em;
      gap: 3em;

      &__info {
        &--brand {
          font-size: 1rem;
        }

        &--title {
          font-size: 2rem;
        }

        &--text {
          font-size: 1.1rem;
        }
      }

      &__purchase {
        justify-content: flex-end;
        gap: 2em;
      }

      Button {
        align-self: flex-start;
        width: 50%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .product {
      flex-direction: column;
      width: 35em;
      gap: 2em;

      &__info {
        &--title {
          font-size: 3rem;
        }
      }

      &__purchase {

        &--pricing {
          flex-direction: column;
          align-items: flex-start;
        }
      }

      .purchase {
        display: flex;
        justify-content: space-between;
        gap: 2em;


        .button__container {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;

          Button {
            width: 17em;
            margin: 0;
          }
        }


        .quantity {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1em;
          width: 100%;
          background: ${(props) => props.theme.colors.lightGrayBlue};

          .display {
            font-weight: 600;
          }

          .minus,
          .plus {
            all: unset;
            cursor: pointer;
            width: 1.5em;
            height: 1.5em;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
`;

export default ProductCard;