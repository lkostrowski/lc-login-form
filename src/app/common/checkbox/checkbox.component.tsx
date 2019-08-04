import React, { HTMLProps } from 'react';
import cx from 'classnames';

import checkboxNotFilledUrl from '../../../icons/checkbox-unchecked.svg';
import checkboxFilledUrl from '../../../icons/checkbox.svg';

import styles from './checkbox.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
    label: string;
}

export const Checkbox: React.FC<Props> = ({
    className,
    checked,
    label,
    ...props
}) => {
    return (
        <label className={cx(className, styles.container)}>
            <input checked={checked} hidden type="checkbox" {...props} />
            {checked ? (
                <img className={styles.icon} alt="" src={checkboxFilledUrl} />
            ) : (
                <img
                    className={styles.icon}
                    alt=""
                    src={checkboxNotFilledUrl}
                />
            )}
            <span className={styles.label}>{label}</span>
        </label>
    );
};
