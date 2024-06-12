import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Button } from '@/shared/ui/Button/Button';
import '@testing-library/jest-dom/extend-expect';
import { ButtonThemes } from './Button.types';
describe('Button', function () {
    test('renders correctly', function () {
        render(_jsx(Button, { theme: ButtonThemes.CLEAR, children: "Button" }));
        var buttonElement = screen.getByText('Button');
        expect(buttonElement).toBeInTheDocument();
    });
    test('should be clear class', function () {
        render(_jsx(Button, { theme: ButtonThemes.CLEAR, children: "Button" }));
        var buttonElement = screen.getByText('Button');
        expect(buttonElement).toHaveClass('clear');
    });
});
