import Head from 'next/head';
import Header from '@/components/Header';
import styled from 'styled-components';
import { useState } from 'react';
import ImageCarousel from '@/components/ImageCarousel';
import CartModal from '@/components/CartModal';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const [overlay, setOverlay] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const toggleOverlay = () => {
    setOverlay(!overlay);
  }

  const toggleCart = () => {
    setShowCart(!showCart);
  }

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decreaseQuantity = () => {
    setQuantity(prev => prev === 0 ? 0 : prev - 1)
  }

  return (
    <Wrapper>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header toggleOverlay={toggleOverlay} toggleCart={toggleCart} />
      <main>
        <div className={`overlay ${overlay ? 'show__overlay' : ''}`}></div>
        <ImageCarousel />
        {showCart && (
          <div className="modal">
            <CartModal />
          </div>
        )}
        <ProductCard decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} quantity={quantity}/>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  .overlay {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.colors.black};
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
    transform: translateY(-18.5em);
    display: flex;
    justify-content: center;
    position: absolute;
    margin: 0 auto;
    width: 100%;
  }
`