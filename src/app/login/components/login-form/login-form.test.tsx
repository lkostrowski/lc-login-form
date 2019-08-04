import { cleanup, fireEvent, render, wait } from '@testing-library/react';
import { FormikProps } from 'formik';
import nanoID from 'nanoid';
import React from 'react';

import { LoginFormDto } from '../../login-form.dto';

import { LoginForm, StatefulLoginForm } from './login-form.component';

afterEach(cleanup);

jest.mock('nanoid');

describe('Login form component', () => {
    beforeEach(() => {
        (nanoID as jest.Mock)
            .mockImplementationOnce(() => 'id-1')
            .mockImplementationOnce(() => 'id-2');
    });

    describe('Snapshots', () => {
        const formikPropsMock: Partial<FormikProps<LoginFormDto>> = {
            errors: {},
            values: {
                email: '',
                password: '',
                keepLogged: false,
            },
            handleChange: () => {},
            handleBlur: () => {},
            handleSubmit: () => {},
        };

        it('Renders empty state', () => {
            const { container } = render(
                <LoginForm
                    {...formikPropsMock as FormikProps<LoginFormDto>}
                    onFormSubmit={() => {}}
                />,
            );

            expect(container).toMatchSnapshot();
        });

        it('Renders filled state', () => {
            const { container } = render(
                <LoginForm
                    {...formikPropsMock as FormikProps<LoginFormDto>}
                    onFormSubmit={() => {}}
                    values={{
                        password: 'Asd123!',
                        email: 'lukasz@ostrowski.ninja',
                        keepLogged: false,
                    }}
                />,
            );

            expect(container).toMatchSnapshot();
        });

        it('Renders field errorMessage state', () => {
            const { container } = render(
                <LoginForm
                    {...formikPropsMock as FormikProps<LoginFormDto>}
                    onFormSubmit={() => {}}
                    touched={{
                        password: true,
                    }}
                    values={{
                        password: '',
                        email: 'lukasz@ostrowski.ninja',
                        keepLogged: false,
                    }}
                    errors={{
                        password: 'Password is required',
                    }}
                />,
            );

            expect(container).toMatchSnapshot();
        });
    });

    describe('Integration', () => {
        it('Should let user fill and submit the form', async (done) => {
            const mockSubmit = jest.fn();

            const { getByLabelText, container } = render(
                <StatefulLoginForm onFormSubmit={mockSubmit} />,
            );

            fireEvent.input(getByLabelText('E-mail'), {
                target: {
                    value: 'lukasz@ostrowski.ninja',
                },
            });

            fireEvent.input(getByLabelText('Password'), {
                target: {
                    value: 'Asd123',
                },
            });
            fireEvent.submit(container.querySelector('form')!);

            await wait();

            expect(mockSubmit).toBeCalled();
            done();
        });

        it('Should ignore submit if user doesnt fill form and show errors', async () => {
            const mockSubmit = jest.fn();

            const { container, getByTestId, debug } = render(
                <StatefulLoginForm onFormSubmit={mockSubmit} />,
            );

            fireEvent.submit(container.querySelector('form')!);

            await wait();

            expect(getByTestId('text-field:error-message')).toBeDefined();

            expect(mockSubmit).not.toBeCalled();
        });

        it('Should submit if errors are corrected', async () => {
            const mockSubmit = jest.fn();

            const { getByLabelText, container } = render(
                <StatefulLoginForm onFormSubmit={mockSubmit} />,
            );

            fireEvent.submit(container.querySelector('form')!);

            await wait();

            expect(mockSubmit).not.toBeCalled();

            fireEvent.input(getByLabelText('E-mail'), {
                target: {
                    value: 'lukasz@ostrowski.ninja',
                },
            });

            fireEvent.input(getByLabelText('Password'), {
                target: {
                    value: 'Asd123',
                },
            });

            await wait();

            fireEvent.submit(container.querySelector('form')!);

            await wait();

            expect(mockSubmit).toBeCalled();
        });
    });
});
