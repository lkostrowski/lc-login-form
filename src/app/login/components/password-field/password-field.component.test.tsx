import { cleanup, render } from '@testing-library/react';
import nanoID from 'nanoid';
import React from 'react';

import { PasswordField } from './password-field.component';

afterEach(cleanup);

jest.mock('nanoid');
(nanoID as jest.Mock).mockImplementation(() => 'id');

describe('Password field', function() {
    describe('Snapshots', () => {
        it('Valid password', () => {
            const { container } = render(
                <PasswordField value='Password1' onChange={() => {}} />,
            );

            expect(container).toMatchSnapshot();
        });

        it('Empty password', () => {
            const { container } = render(
                <PasswordField value='' onChange={() => {}} />,
            );

            expect(container).toMatchSnapshot();
        });

        it('Invalid password', () => {
            const { container } = render(
                <PasswordField value='pass' onChange={() => {}} />,
            );

            expect(container).toMatchSnapshot();
        });
    });
});
