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
                <span className="product__brand">sneaker company</span>
                <h1 className="product__title">Fall Limited Edition Sneakers</h1>
                <p className="product__text">  These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className="product__pricing">
                    <span className="price">$125.00 <span className='discount'>50%</span></span><span className="original__price">$250.00</span>
                </div>
                <div className="purchase">
                    <div className="quantity">
                        <button onClick={decreaseQuantity} className="minus"><Image src={minus} /></button>
                        <div className="display">{quantity}</div>
                        <button onClick={increaseQuantity} className="plus"><Image src={plus} /></button>
                    </div>
                </div>
            </div>
            <Button><CartIcon />Add to cart</Button>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  .product {
    display: flex;
    flex-direction: column;
    padding: 2em;
    gap: 1em;

    &__brand {
        color: ${props => props.theme.colors.orange};
        text-transform: uppercase;
        font-weight: 600;
        font-size: 0.8rem;
        letter-spacing: 0.1em;
    }

    &__title {
        font-size: 1.7rem;
    }

    &__text {
        font-size: 0.9rem;
        line-height: 1.6;
        color: ${props => props.theme.colors.darkGrayBlue};
    }

    &__pricing {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .original__price {
            font-weight: 600;
            color: ${props => props.theme.colors.grayBlue};
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
                color: ${props => props.theme.colors.orange};
                background: ${props => props.theme.colors.lightOrange};
                padding: 0.2em 0.5em;
            }
        }
    }
    .purchase {
        background: ${props => props.theme.colors.lightGrayBlue};

        .quantity {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1em;
        }

        .display {
            font-weight: 600;
        }

        .minus, .plus {
            all: unset;
            cursor: pointer;
            width: 2em;
            height: 2em;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
  }
`;

export default ProductCard;
