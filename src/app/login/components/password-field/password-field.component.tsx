import React, { useState } from 'react';
import cx from 'classnames';

import { ReactComponent as EyeIcon } from '../../../../images/eye.svg';

import styles from './password-field.module.scss';

import {
    Props as TextFieldProps,
    TextField,
} from '../../../common/text-field/text-field.component';

interface Props extends TextFieldProps {}

export const PasswordField: React.FC<Props> = ({ className, type, ...props }) => {
    const [visible, setVisible] = useState(false);

    return (
        <TextField
            className={className}
            rightIcon={
                <EyeIcon
                    className={cx(styles.icon, {
                        [styles.iconDisabled]: visible,
                    })}
                    onClick={() => setVisible((visible) => !visible)}
                />
            }
            type={visible ? 'text' : 'password'}
            {...props}
        />
    );
};
