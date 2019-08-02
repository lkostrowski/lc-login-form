import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';

import styles from './button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
    rightIcon?: ReactNode;
}

export const Button: React.FC<Props> = ({
    className,
    fullWidth,
    children,
    rightIcon,
    ...props
}) => {
    return (
        <button
            className={cx(styles.button, className, {
                [styles.fullWidth]: fullWidth,
            })}
            {...props}
        >
            <div
                className={cx(styles.content, {
                    [styles.withRightIcon]: Boolean(rightIcon),
                })}
            >
                {children}
                {rightIcon && (
                    <div className={styles.rightIconContainer}>{rightIcon}</div>
                )}
            </div>
        </button>
    );
};
