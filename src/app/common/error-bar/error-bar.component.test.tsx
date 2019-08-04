import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { ErrorBar } from './error-bar.component';

afterEach(cleanup);

describe('Error Bar component', () => {
    describe('Snapshots', () => {
        test('Default', () => {
            const { container } = render(<ErrorBar>Error content</ErrorBar>);

            expect(container).toMatchSnapshot();
        });
    });
});
