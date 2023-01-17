import React from 'react';
import { IButtonProps } from './Props';
import styles from './Styles.module.scss';
import cn from 'classnames';

export const Button = ({
  appearance = 'primary',
  size,
  children,
  className,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.secondary]: appearance === 'secondary',
        [styles['button--lg']]: size === 'lg',
        [styles['button--md']]: size === 'md',
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
