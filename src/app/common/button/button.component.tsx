import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

import styles from './button.module.scss';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<Props> = ({ className, ...props }) => {
    return <button className={cx(styles.button, className)} {...props} />;
};
