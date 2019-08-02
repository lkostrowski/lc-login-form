import React, { SVGAttributes } from 'react';
import cx from 'classnames';

import styles from './loading-spinner.module.scss';

import { ReactComponent as SpinnerIcon } from '../../../images/loading.svg';

export const LoadingSpinner = ({
    className,
    ...props
}: SVGAttributes<SVGElement>) => {
    return <SpinnerIcon className={cx(className, styles.loader)} {...props} />;
};
