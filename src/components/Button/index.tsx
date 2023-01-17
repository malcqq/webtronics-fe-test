import React from 'react';
import cn from 'classnames';
import { IButtonProps } from './Props';
import styles from './Styles.module.scss';

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
        [styles['button--large']]: size === 'L',
        [styles['button--medium']]: size === 'M',
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
