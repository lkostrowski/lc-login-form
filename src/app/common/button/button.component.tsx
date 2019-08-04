import cx from 'classnames';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
    rightIcon?: ReactNode;
}

/**
 * In "real" project button will probably contain few variants and a lot of different props, like size etc.
 * Here lets stick to one with minimal config.
 */
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
