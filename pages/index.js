import Head from 'next/head';
import Header from '@/components/Header';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ImageCarousel from '@/components/ImageCarousel';
import CartModal from '@/components/CartModal';
import ProductCard from '@/components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [overlay, setOverlay] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(125);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(quantity * price);
  }, [quantity]);

  const toggleOverlay = () => {
    setOverlay(!overlay);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const clearCart = () => {
    setQuantity(0);
  };

  return (
    <Wrapper className='container'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className="header__container">
        <Header toggleOverlay={toggleOverlay} toggleCart={toggleCart} quantity={quantity}/>
        <div className="modal">
          <AnimatePresence>
            {showCart && (
              <motion.div
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -300, opacity: 0 }}
              >
                <CartModal
                  clearCart={clearCart}
                  quantity={quantity}
                  total={total}
                  price={price}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
        <div className={`overlay ${overlay ? 'show__overlay' : ''}`}></div>
        <section className="product__container container">
          <ImageCarousel />
          <ProductCard
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            quantity={quantity}
            price={price}
          />
        </section>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;

  .header__container {
    position: relative;
  }

  .overlay {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.black};
    height: 100vh;
    width: 100%;
    transition: 200ms;
    pointer-events: none;
    z-index: 1;
  }

  .show__overlay {
    opacity: 0.8;
    transition-delay: 200ms;
    transition: 300ms;
  }

  .modal {
    transform: translateY(6em);
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 2;
  }

  @media screen and (min-width: 900px) {

    .modal {
      width: unset;
    }

    .product__container {
      margin-top: 4em;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    
  }

  @media screen and (min-width: 1400px){
    .modal {
      transform: translate(3em, 6em);
    }
  }
`;
