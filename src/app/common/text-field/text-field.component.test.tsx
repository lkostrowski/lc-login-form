import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TextField } from './text-field.component';
import nanoID from 'nanoid';

afterEach(cleanup);

jest.mock('nanoid');
(nanoID as jest.Mock).mockImplementation(() => 'id');

describe('Text field component', () => {
    describe('Snapshots', () => {
        test('Empty', () => {
            const { container } = render(<TextField />);

            expect(container).toMatchSnapshot();
        });
        test('Filled', () => {
            const { container } = render(
                <TextField value="Filled" onChange={() => {}} />,
            );

            expect(container).toMatchSnapshot();
        });
        test('With right icon', () => {
            const { container } = render(<TextField rightIcon={<svg />} />);

            expect(container).toMatchSnapshot();
        });
        test('With error', () => {
            const { container } = render(
                <TextField errorMessage="Some error" hasError />,
            );

            expect(container).toMatchSnapshot();
        });
    });
});
