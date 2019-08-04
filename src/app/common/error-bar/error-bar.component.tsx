import cx from 'classnames';
import React, { HTMLProps } from 'react';

import { ReactComponent as ErrorIcon } from '../../../icons/error.svg';

import styles from './error-bar.module.scss';

interface Props extends HTMLProps<HTMLDivElement> {}

export const ErrorBar: React.FC<Props> = ({
    className,
    children,
    ...props
}) => (
    <div className={cx(className, styles.container)} {...props}>
        <ErrorIcon className={styles.icon} />
        {children}
    </div>
);
