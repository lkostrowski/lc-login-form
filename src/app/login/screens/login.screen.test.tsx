import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { LoginScreen } from './login.screen';
import { useLoginActions } from '../hooks/use-login-actions';

jest.mock('../hooks/use-login-actions');

describe('Login Screen', function() {
    it('Can log in to app', async (done) => {
        const mockRequest = jest.fn();

        (useLoginActions as jest.Mock).mockImplementation(() => ({
            logged: false,
            error: null,
            loading: false,
            requestLogin: mockRequest,
        }));

        const { container, getByLabelText } = render(<LoginScreen />);

        fireEvent.input(getByLabelText('E-mail'), {
            target: { value: 'foo@bar.com' },
        });

        fireEvent.input(getByLabelText('Password'), {
            target: { value: 'Password1' },
        });

        await wait();

        fireEvent.submit(container.querySelector('form')!);

        await wait();

        expect(mockRequest).toHaveBeenCalledWith({
            email: 'foo@bar.com',
            keepLogged: false,
            password: 'Password1',
        });

        done();
    });
});
