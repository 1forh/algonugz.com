import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Price from './Price';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import ZoomButton from './ZoomButton';

function Card({ item }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const showImage = useCallback((event) => {
    event.preventDefault();
    setIsZoomed(true);
  }, []);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <a href={item.url} className='group'>
      <div className='relative'>
        <div className='absolute top-0.5 right-0.5 z-20'>
          <ZoomButton onClick={showImage} />
        </div>

        <div className={'transition-opacity duration-150 absolute'}>
          <ControlledZoom
            isZoomed={isZoomed}
            onZoomChange={handleZoomChange}
            zoomMargin={100}
            overlayBgColorStart='rgba(23, 23, 23, 0.5)'
            overlayBgColorEnd='rgba(23, 23, 23, 0.75)'
          >
            {isZoomed && (
              <div>
                <Image
                  src={item.image}
                  alt={item.id}
                  width={400}
                  height={400}
                  className='rounded-lg'
                />
              </div>
            )}
          </ControlledZoom>
        </div>

        <Image
          src={item.image}
          alt={item.id}
          width={400}
          height={400}
          className='absolute inset-0 z-10 rounded-lg'
        />
      </div>
      <p className='text-green-50'>{item.id}</p>
      {item.name && <h3 className='text-green-50'>{item.name}</h3>}

      <p className='flex text-green-50'>
        OG price: &nbsp;
        <Price price={item.price} />
      </p>

      <p className='text-green-300'>Total Supply: {item.total}</p>
    </a>
  );
}

export default Card;
