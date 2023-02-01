import React from 'react';
import styled from 'styled-components';
import image1 from '../public/image-product-1.jpg';
import image2 from '../public/image-product-2.jpg';
import image3 from '../public/image-product-3.jpg';
import image4 from '../public/image-product-4.jpg';
import prev from '../public/icon-previous.svg';
import next from '../public/icon-next.svg';
import { useState } from 'react';
import Image from 'next/image';

const images = [image1, image2, image3, image4];

const ImageCarousel = () => {
    const [index, setIndex] = useState(0);

    return (
        <Wrapper>
            <div className="image__container">
                <Image className='image' src={images[index]}/>
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
            background: ${props => props.theme.colors.white}
        }
    }

`

export default ImageCarousel;