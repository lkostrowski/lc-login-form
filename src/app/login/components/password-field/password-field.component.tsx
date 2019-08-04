import React, { useState } from 'react';
import cx from 'classnames';

import { ReactComponent as EyeIcon } from '../../../../icons/eye.svg';

import styles from './password-field.module.scss';

import {
    Props as TextFieldProps,
    TextField,
} from '../../../common/text-field/text-field.component';
import { ConditionBar } from '../../../common/condition-bar/condition-bar.component';
import { usePasswordValidator } from '../../hooks/use-password-validator';

interface Props extends TextFieldProps {}

const mapValidationToConditionState = (valid: boolean | undefined) =>
    valid === true ? 'valid' : valid === false ? 'invalid' : undefined;

export const PasswordField: React.FC<Props> = ({
    className,
    type,
    value,
    ...props
}) => {
    const [visible, setVisible] = useState(false);
    const { hasMinLength, hasUpper, hasLower, hasDigit } = usePasswordValidator(
        value as string,
    );

    return (
        <div className={className}>
            <TextField
                value={value}
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
            {(value as string).length > 0 && (
                <div className={styles.conditions} data-testid="password-field:validation-conditions">
                    <ConditionBar
                        className={styles.condition}
                        label="Min. 6 letters"
                        state={mapValidationToConditionState(hasMinLength)}
                    />
                    <ConditionBar
                        className={styles.condition}
                        label="Upper letter"
                        state={mapValidationToConditionState(hasUpper)}
                    />
                    <ConditionBar
                        className={styles.condition}
                        label="Lower letter"
                        state={mapValidationToConditionState(hasLower)}
                    />
                    <ConditionBar
                        className={styles.condition}
                        label="A digit"
                        state={mapValidationToConditionState(hasDigit)}
                    />
                </div>
            )}
        </div>
    );
};
