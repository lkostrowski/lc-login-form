import React, { HTMLProps, ReactNode, useRef } from 'react';
import cx from 'classnames';
import nanoID from 'nanoid';

import styles from './text-field.module.scss';

export interface Props extends HTMLProps<HTMLInputElement> {
    label?: string;
    inputClassName?: string;
    errorMessage?: string;
    hasError?: boolean;
    rightIcon?: ReactNode;
}

export const TextField: React.FC<Props> = ({
    label,
    className,
    inputClassName,
    errorMessage,
    hasError,
    rightIcon,
    ...props
}) => {
    const id = useRef(nanoID(5));

    return (
        <div className={cx(styles.container, className)}>
            {label && (
                <label
                    className={cx(styles.label, {
                        [styles.withError]: hasError,
                    })}
                    htmlFor={id.current}
                >
                    {label}
                </label>
            )}
            <div className={styles.fieldContainer}>
                <input
                    className={cx(inputClassName, styles.field, {
                        [styles.withError]: hasError,
                        [styles.withRightIcon]: Boolean(rightIcon),
                    })}
                    id={id.current}
                    {...props}
                />
                {rightIcon && (
                    <div className={styles.rightIconContainer}>{rightIcon}</div>
                )}
            </div>
            {errorMessage && hasError && (
                <span
                    data-testid="text-field:error-message"
                    className={styles.error}
                >
                    {errorMessage}
                </span>
            )}
        </div>
    );
};
