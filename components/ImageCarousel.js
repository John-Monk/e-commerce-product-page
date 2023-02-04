import React from 'react';
import styled from 'styled-components';
import image1 from '../public/image-product-1.jpg';
import image2 from '../public/image-product-2.jpg';
import image3 from '../public/image-product-3.jpg';
import image4 from '../public/image-product-4.jpg';
import thumb1 from '../public/image-product-1-thumbnail.jpg';
import thumb2 from '../public/image-product-2-thumbnail.jpg';
import thumb3 from '../public/image-product-3-thumbnail.jpg';
import thumb4 from '../public/image-product-4-thumbnail.jpg';
import prev from '../public/icon-previous.svg';
import next from '../public/icon-next.svg';
import { useState } from 'react';
import Image from 'next/image';

const images = [image1, image2, image3, image4];
const thumbnail = [thumb1, thumb2, thumb3, thumb4];

const ImageCarousel = () => {
    const [index, setIndex] = useState(0);

    return (
        <Wrapper>
            <div className="image__container">
                <Image className='image' src={images[index]}/>
            </div>
            <div className="image__selector">
                <ul>
                    {thumbnail.map((image, i) => <li key={i}><div className={` inactive__overlay ${index === i ? 'active__overlay' : 'inactive__overlay'}`}></div><Image className='thumbnail' onClick={() => setIndex(i)} src={image}/></li>)}
                </ul>
            </div>
            <div className="image__controls">
                <div onClick={() => setIndex(prev => prev < 1 ? images.length - 1 : prev - 1)} href="#"><Image src={prev} /></div>
                <div onClick={() => setIndex(prev => prev === images.length - 1 ? 0 : prev + 1)} href="#"><Image src={next} /></div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  position: relative;

  .image__container {
    overflow: hidden;

    .image {
      width: 100%;
      height: 19em;
      object-fit: cover;
    }
  }

  .image__selector {
    display: none;
  }

  .image__controls {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      height: 2.5em;
      width: 2.5em;
      margin: 1em;
      background: ${(props) => props.theme.colors.white};
    }
  }

  @media screen and (min-width: 640px) {
    .image__container {
      .image {
        height: 25em;
      }
    }
  }

  @media screen and (min-width: 900px) {
    width: 26em;
    height: 33em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .image__container {
      border-radius: 1em;

      .image {
        width: 100%;
      }
    }

    .image__selector {
      padding: 1em 0;
      display: flex;
      width: 100%;

      ul {
        display: flex;
        justify-content: space-between;
        flex-basis: 100%;

        li {
          display: flex;
          overflow: hidden;
          justify-content: center;
          align-items: center;
          position: relative;
          height: 5em;
          width: 5em;
          border-radius: 0.75em;

          .inactive__overlay {
            position: absolute;
            background: rgba(255, 255, 255, 0);
            z-index: 1;
            width: 100%;
            height: 100%;
            border-radius: 0.75em;
            pointer-events: none;
            border: 2px solid rgba(255, 255, 255, 0);
          }

          .active__overlay {
            border: 2px solid ${(props) => props.theme.colors.orange};
            background: rgba(255, 255, 255, 0.59);
            transition: 200ms;
          }

          .thumbnail {
            width: 5.5em;
            height: 5.5em;
            position: absolute;
            transition: 200ms;
            cursor: pointer;
          }
        }
      }
    }
    .image__controls {
      display: none;
    }
  }
`;

export default ImageCarousel;