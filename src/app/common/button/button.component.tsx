import React, { ButtonHTMLAttributes, HTMLAttributes, HTMLProps } from 'react';
import cx from 'classnames';

import styles from './button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<Props> = ({ className, ...props }) => {
    return <button className={cx(styles.button, className)} {...props} />;
};
