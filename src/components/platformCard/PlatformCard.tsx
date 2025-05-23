import React from 'react';
import Styles from './PlatformCard.module.scss';
import { PlatformCardVariant } from '../../utlis/enums/platformCard.enum';

interface PlatformCardProps {
  isImage: boolean;
  imagesrc?: string;
  imageAlt?: string;
  text?: string;
  onClick?: (platformId: string) => void;
  platformId: string;
  isSelected?: boolean;
  variant: PlatformCardVariant;
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  isImage,
  imagesrc,
  imageAlt,
  text,
  onClick,
  platformId,
  isSelected = false,
  variant,
}) => {
  const buttonStyle = {
    ...(isSelected
      ? {
          borderRadius: '50px',
          border: '1px solid #66B5B3',
          background: 'rgba(102, 181, 179, 0.10)',
        }
      : {}),
  };

  const handleClick = () => {
    if (onClick) {
      onClick(platformId);
    }
  };

  const variantClass =
    variant === PlatformCardVariant.SMALL ? Styles.small : Styles.medium;

  const variantImg =
    variant === PlatformCardVariant.MEDIUM ? Styles.medium_img : '';

  return (
    <button
      className={`${Styles.button} ${variantClass} ${isImage ? Styles.button_image : Styles.button_text}`}
      style={buttonStyle}
      onClick={handleClick}
      type='button'>
      {isImage ? (
        <img
          src={imagesrc}
          alt={imageAlt}
          className={`${Styles.button_image_url} ${variantImg}`}
        />
      ) : (
        <span className={Styles.button_text_name}>{text}</span>
      )}
    </button>
  );
};

export default PlatformCard;
