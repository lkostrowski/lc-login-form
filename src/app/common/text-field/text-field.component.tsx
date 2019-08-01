import React, { HTMLProps, useRef } from 'react';
import cx from 'classnames';
import nanoID from 'nanoid';

import styles from './text-field.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
    label?: string;
    inputClassName?: string;
    error?: string;
}

export const TextField: React.FC<Props> = ({
    label,
    className,
    inputClassName,
    error,
    ...props
}) => {
    const id = useRef(nanoID(5));

    return (
        <div className={cx(styles.container, className)}>
            {label && (
                <label className={styles.label} htmlFor={id.current}>
                    {label}
                </label>
            )}
            <input
                className={cx(inputClassName, styles.field)}
                id={id.current}
                {...props}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
};
