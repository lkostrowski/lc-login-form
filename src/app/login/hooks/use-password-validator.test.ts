import { renderHook } from '@testing-library/react-hooks';
import { usePasswordValidator } from './use-password-validator';

describe('Use password validation hook', function() {
    it('Should return all true if password meets conditions', () => {
        const { result } = renderHook(() => usePasswordValidator('Password1'));

        expect(result.current.hasUpper).toBeTruthy();
        expect(result.current.hasLower).toBeTruthy();
        expect(result.current.hasDigit).toBeTruthy();
        expect(result.current.hasMinLength).toBeTruthy();
    });

    it('Should render all false if password is empty', () => {
        const { result } = renderHook(() => usePasswordValidator(''));

        expect(result.current.hasUpper).toBeFalsy();
        expect(result.current.hasLower).toBeFalsy();
        expect(result.current.hasDigit).toBeFalsy();
        expect(result.current.hasMinLength).toBeFalsy();
    });

    it('Should change state from true to false', async (done) => {
        const { result, rerender } = renderHook(
            ({ pass }: { pass: string }) => usePasswordValidator(pass),
            { initialProps: { pass: '' } },
        );

        expect(result.current.hasUpper).toBeFalsy();
        expect(result.current.hasLower).toBeFalsy();
        expect(result.current.hasDigit).toBeFalsy();
        expect(result.current.hasMinLength).toBeFalsy();

        rerender({ pass: 'pass' });

        expect(result.current.hasLower).toBeTruthy();

        rerender({ pass: 'password' });

        expect(result.current.hasMinLength).toBeTruthy();

        rerender({ pass: 'passworD' });

        expect(result.current.hasUpper).toBeTruthy();

        rerender({ pass: 'passworD1' });

        expect(result.current.hasUpper).toBeTruthy();
        expect(result.current.hasLower).toBeTruthy();
        expect(result.current.hasDigit).toBeTruthy();
        expect(result.current.hasMinLength).toBeTruthy();

        done();
    });
});
