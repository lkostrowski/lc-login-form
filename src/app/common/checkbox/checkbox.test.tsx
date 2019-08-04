import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { Checkbox } from './checkbox.component';

afterEach(cleanup);

describe('Checkbox component', () => {
    describe('Snapshots', () => {
        test('Basic version', () => {
            const { container } = render(<Checkbox label='Checkbox' />);

            expect(container).toMatchSnapshot();
        });
        test('Checked version', () => {
            const { container } = render(
                <Checkbox onChange={() => {}} checked label='Checkbox' />,
            );

            expect(container).toMatchSnapshot();
        });
    });
});
