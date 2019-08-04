import cx from 'classnames';
import React, { HTMLProps } from 'react';

import styles from './login-successful.module.scss';

interface Props extends HTMLProps<HTMLDivElement> {}

export const LoginSuccessful = ({ className, ...props }: Props) => (
    <div className={cx(styles.container, className)} {...props}>
        <span className={styles.text}>Hire me</span>🙃
    </div>
);
