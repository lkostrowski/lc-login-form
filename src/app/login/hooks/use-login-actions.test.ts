import { renderHook } from '@testing-library/react-hooks';
import { useDispatch, useSelector } from 'react-redux';

import { getIsLoginPending } from '../selectors/get-is-login-pending.selector';
import { getIsUserLogged } from '../selectors/get-is-user-logged.selector';
import { getLoginError } from '../selectors/get-login-error.selector';

import { useLoginActions } from './use-login-actions';

jest.mock('react-redux');
jest.mock('../selectors/get-is-user-logged.selector');
jest.mock('../selectors/get-login-error.selector');
jest.mock('../selectors/get-is-login-pending.selector');

describe('Use login actions Hook', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (useDispatch as jest.Mock).mockImplementation(() => mockDispatch);
        (useSelector as jest.Mock).mockImplementation((fun) => fun());
        ((getIsUserLogged as unknown) as jest.Mock).mockImplementation(
            () => true,
        );
        ((getLoginError as unknown) as jest.Mock).mockImplementation(
            () => null,
        );
        ((getIsLoginPending as unknown) as jest.Mock).mockImplementation(
            () => false,
        );
    });

    it('Should dispatch login action event', () => {
        const { result } = renderHook(() => useLoginActions());

        result.current.requestLogin({
            email: 'some@email.com',
            keepLogged: true,
            password: 'asdASD1',
        });

        expect(mockDispatch).toHaveBeenCalled();
    });

    it('Should return login state from store to component', () => {
        const { result } = renderHook(() => useLoginActions());

        expect(result.current.logged).toBe(true);
        expect(result.current.error).toEqual(null);
        expect(result.current.loading).toBe(false);
    });
});
