import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Button } from './button.component';

afterEach(cleanup);

describe('Button component', () => {
    describe('Snapshots', () => {
        test('Basic version', () => {
            const { container } = render(<Button>Click me</Button>);

            expect(container).toMatchSnapshot();
        });
        test('With icon', () => {
            const { container } = render(
                <Button rightIcon={<svg />}>Click me</Button>,
            );

            expect(container).toMatchSnapshot();
        });
        test('Full width version', () => {
            const { container } = render(<Button fullWidth>Click me</Button>);

            expect(container).toMatchSnapshot();
        });
    });
});
