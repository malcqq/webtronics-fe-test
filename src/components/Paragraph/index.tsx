import React from 'react';
import cn from 'classnames';
import { IParagraphProps } from './Props';
import styles from './Styles.module.scss';

const Paragraph = ({
  description,
  children,
  className,
  ...props
}: IParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.button, className, {
        [styles['paragraph--description']]: description === 'description',
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
