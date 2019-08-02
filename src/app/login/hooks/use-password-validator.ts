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

    /**
     * I use validateSync instead of promise based, because React-Testing-Library
     * and actually - React, doesnt handle async act() and testing async hooks is impossible or hard
     */
    useEffect(() => {
        try {
            oneDigit.validateSync(value);
            setHasDigit(true);
        } catch (e) {
            setHasDigit(false);
        }
        try {
            oneLower.validateSync(value);
            setHasLower(true);
        } catch (e) {
            setHasLower(false);
        }
        try {
            oneUpper.validateSync(value);
            setHasUpper(true);
        } catch (e) {
            setHasUpper(false);
        }
        try {
            minLength.validateSync(value);
            setHasMinLength(true);
        } catch (e) {
            setHasMinLength(false);
        }
    }, [value]);

    return { hasDigit, hasLower, hasUpper, hasMinLength };
};
