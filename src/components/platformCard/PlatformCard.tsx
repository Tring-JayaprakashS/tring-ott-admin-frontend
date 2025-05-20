import React, { useState } from 'react';
import Styles from './PlatformCard.module.scss';

interface PlatformCardProps {
  isImage: boolean;
  imagesrc?: string;
  imageAlt?: string;
  text?: string;
  width?: string | number;
  height?: string | number;
  imgwidth?: string | number;
  imgheight?: string | number;
  onClick?: (platformId: string) => void;
  platformId: string;
  isSelected?: boolean;
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  isImage,
  imagesrc,
  imageAlt,
  text,
  width = '',
  height = '',
  imgwidth = '',
  imgheight = '',
  onClick,
  platformId,
  isSelected = false,
}) => {
  const buttonStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    ...(isSelected
      ? {
          borderRadius: '50px',
          border: '1px solid #66B5B3',
          background: 'rgba(102, 181, 179, 0.10)',
        }
      : {}),
  };

  const imageStyle = {
    width: typeof imgwidth === 'number' ? `${imgwidth}px` : imgwidth,
    height: typeof imgheight === 'number' ? `${imgheight}px` : imgheight,
  };

  const handleClick = () => {
    if (onClick) {
      onClick(platformId);
    }
  };

  return (
    <button
      className={`${Styles.button} ${isImage ? Styles.button_image : Styles.button_text}`}
      style={buttonStyle}
      onClick={handleClick}
      type='button'>
      {isImage ? (
        <img
          src={imagesrc}
          alt={imageAlt}
          style={imageStyle}
          className={Styles.button_image_url}
        />
      ) : (
        <span className={Styles.button_text_name}>{text}</span>
      )}
    </button>
  );
};

export default PlatformCard;
