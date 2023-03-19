import React, { FC } from 'react';
import styles from './activity-indicator.module.css';

type TProps = {
  size?: number;
  secondary?: boolean;
};

const ActivityIndicator: FC<TProps> = ({ secondary, size = 20 }) => {
  return (
    <div
      className={styles.loader}
      style={{
        border: secondary ? `${size * 0.15}px solid white` : `${size * 0.15}px solid #f3f3f3`,
        borderTop: `${size * 0.15}px solid #6366F1`,
        width: size,
        height: size,
      }}
    />
  );
};

export default ActivityIndicator;
