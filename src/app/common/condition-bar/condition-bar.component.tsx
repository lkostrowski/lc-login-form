import cx from 'classnames';
import React, { HTMLProps } from 'react';

import styles from './condition-bar.module.scss';

interface Props extends HTMLProps<HTMLDivElement> {
    state: 'valid' | 'invalid' | undefined;
    label: string;
}

export const ConditionBar = ({ state, label, className, ...props }: Props) => {
    return (
        <div className={cx(className, styles.container)} {...props}>
            <div
                className={cx(styles.bar, {
                    [styles.invalid]: state === 'invalid',
                    [styles.valid]: state === 'valid',
                })}
            />
            <span
                className={cx(styles.label, {
                    [styles.invalid]: state === 'invalid',
                    [styles.valid]: state === 'valid',
                })}
            >
                {label}
            </span>
        </div>
    );
};
