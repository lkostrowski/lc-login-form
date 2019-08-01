import React from 'react';
import { render, fireEvent, wait, cleanup } from '@testing-library/react';
import { FormikProps } from 'formik';
import { LoginFormValues } from './login-form-values';
import { LoginForm, StatefulLoginForm } from './login-form.component';
import nanoID from 'nanoid';

afterEach(cleanup);

jest.mock('nanoid');

describe('Login form component', () => {
    beforeEach(() => {
        (nanoID as jest.Mock)
            .mockImplementationOnce(() => 'id-1')
            .mockImplementationOnce(() => 'id-2');
    });

    describe('Snapshots', () => {
        const formikPropsMock: Partial<FormikProps<LoginFormValues>> = {
            errors: {},
            values: {
                email: '',
                password: '',
            },
            handleChange: () => {},
            handleBlur: () => {},
            handleSubmit: () => {},
        };

        it('Renders empty state', () => {
            const { container } = render(
                <LoginForm
                    {...formikPropsMock as FormikProps<LoginFormValues>}
                    onFormSubmit={() => {}}
                />,
            );

            expect(container).toMatchSnapshot();
        });

        it('Renders filled state', () => {
            const { container } = render(
                <LoginForm
                    {...formikPropsMock as FormikProps<LoginFormValues>}
                    onFormSubmit={() => {}}
                    values={{
                        password: 'Asd123!',
                        email: 'lukasz@ostrowski.ninja',
                    }}
                />,
            );

            expect(container).toMatchSnapshot();
        });

        it('Renders field error state', () => {
            const { container } = render(
                <LoginForm
                    {...formikPropsMock as FormikProps<LoginFormValues>}
                    onFormSubmit={() => {}}
                    values={{
                        password: '',
                        email: 'lukasz@ostrowski.ninja',
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
        it('Should let user fill and submit the form', async () => {
            const mockSubmit = jest.fn();

            const { getByLabelText, getByText } = render(
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

            await wait();

            fireEvent.click(getByText('Let me in!'));

            await wait();

            expect(mockSubmit).toBeCalled();
        });

        it('Should ignore submit if user doesnt fill form and show errors', async () => {
            const mockSubmit = jest.fn();

            const { getByText, getAllByTestId } = render(
                <StatefulLoginForm onFormSubmit={mockSubmit} />,
            );

            fireEvent.click(getByText('Let me in!'));

            await wait();

            expect(getAllByTestId('text-field:error-message')).toHaveLength(2);

            expect(mockSubmit).not.toBeCalled();
        });

        it('Should submit if errors are corrected', async () => {
            const mockSubmit = jest.fn();

            const { getByText, getByLabelText } = render(
                <StatefulLoginForm onFormSubmit={mockSubmit} />,
            );

            fireEvent.click(getByText('Let me in!'));

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

            fireEvent.click(getByText('Let me in!'));

            await wait();

            expect(mockSubmit).toBeCalled();
        });
    });
});
