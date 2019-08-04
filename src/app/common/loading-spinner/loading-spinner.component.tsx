import cx from 'classnames';
import React, { SVGAttributes } from 'react';

import { ReactComponent as SpinnerIcon } from '../../../icons/loading.svg';

import styles from './loading-spinner.module.scss';

export const LoadingSpinner = ({
    className,
    ...props
}: SVGAttributes<SVGElement>) => {
    return <SpinnerIcon className={cx(className, styles.loader)} {...props} />;
};
