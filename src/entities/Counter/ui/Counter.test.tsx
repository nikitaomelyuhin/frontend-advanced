import { fireEvent, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { SideBar } from '@/widgets/SideBar';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('should render correctly', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('counter-title')).toHaveTextContent('10');
    });

    test('increment', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('counter-increment'));
        expect(screen.getByTestId('counter-title')).toHaveTextContent('11');
    });

    test('decrement', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('counter-decrement'));
        expect(screen.getByTestId('counter-title')).toHaveTextContent('9');
    });
});
