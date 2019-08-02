import {
    oneDigit,
    oneLower,
    oneUpper,
    minLength,
} from '../validators/password-validation';
import { useEffect, useState } from 'react';

export const usePasswordValidator = (value: string) => {
    const [hasDigit, setHasDigit] = useState<boolean | undefined>(undefined);
    const [hasUpper, setHasUpper] = useState<boolean | undefined>(undefined);
    const [hasLower, setHasLower] = useState<boolean | undefined>(undefined);
    const [hasMinLength, setHasMinLength] = useState<boolean | undefined>(
        undefined,
    );

    useEffect(() => {
        oneDigit
            .validate(value)
            .then(() => {
                setHasDigit(true);
            })
            .catch(() => setHasDigit(false));
        oneLower
            .validate(value)
            .then(() => {
                setHasLower(true);
            })
            .catch(() => setHasLower(false));
        oneUpper
            .validate(value)
            .then(() => {
                setHasUpper(true);
            })
            .catch(() => setHasUpper(false));
        minLength
            .validate(value)
            .then(() => {
                setHasMinLength(true);
            })
            .catch(() => setHasMinLength(false));
    }, [value]);

    return { hasDigit, hasLower, hasUpper, hasMinLength };
};
