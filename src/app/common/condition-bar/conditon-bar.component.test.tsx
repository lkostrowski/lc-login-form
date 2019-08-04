import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { ConditionBar } from './condition-bar.component';

afterEach(cleanup);

describe('Condition Bar component', () => {
    describe('Snapshots', () => {
        test('Invalid', () => {
            const { container } = render(
                <ConditionBar label='Some condition' state='invalid' />,
            );

            expect(container).toMatchSnapshot();
        });

        test('Valid', () => {
            const { container } = render(
                <ConditionBar label='Some condition' state='valid' />,
            );

            expect(container).toMatchSnapshot();
        });
    });
});
