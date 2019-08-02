import React, { HTMLProps, useRef } from 'react';
import cx from 'classnames';
import nanoID from 'nanoid';

import styles from './text-field.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
    label?: string;
    inputClassName?: string;
    errorMessage?: string;
    hasError?: boolean;
}

export const TextField: React.FC<Props> = ({
    label,
    className,
    inputClassName,
    errorMessage,
    hasError,
    ...props
}) => {
    const id = useRef(nanoID(5));

    return (
        <div className={cx(styles.container, className)}>
            {label && (
                <label
                    className={cx(styles.label, {
                        [styles.withError]: hasError || errorMessage,
                    })}
                    htmlFor={id.current}
                >
                    {label}
                </label>
            )}
            <div className={styles.fieldContainer}>
                <input
                    className={cx(inputClassName, styles.field, {
                        [styles.withError]: hasError || errorMessage,
                    })}
                    id={id.current}
                    {...props}
                />
            </div>
            {errorMessage && (
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
