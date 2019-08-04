import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { LoadingSpinner } from './loading-spinner.component';

afterEach(cleanup);

describe('Loading spinner component', () => {
    describe('Snapshots', () => {
        test('Default', () => {
            const { container } = render(<LoadingSpinner />);

            expect(container).toMatchSnapshot();
        });
    });
});
