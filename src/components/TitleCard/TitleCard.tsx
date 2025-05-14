import React from 'react';
import styles from './TitleCard.module.scss';

interface TitleCardProps {
  title: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
}

const TitleCard: React.FC<TitleCardProps> = ({
  title,
  width = 'w-full',
  height = 'h-auto',
  children,
}) => {
  return (
    <div className={`${styles.titleCard} ${width} ${height}`}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
};

export default TitleCard;
