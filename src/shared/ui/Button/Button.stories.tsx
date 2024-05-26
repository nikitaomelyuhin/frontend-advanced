import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/app/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';
import { Button } from './Button';
import { ButtonSize, ButtonThemes } from '@/shared/ui/Button/Button.types';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonThemes.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonThemes.OUTLINE,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
  children: 'Text',
  theme: ButtonThemes.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
  children: 'Text',
  theme: ButtonThemes.OUTLINE,
  size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ButtonThemes.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonThemes.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonThemes.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonThemes.BACKGROUND,
  square: true,
};

export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  theme: ButtonThemes.BACKGROUND,
  square: true,
  size: ButtonSize.M,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  theme: ButtonThemes.BACKGROUND,
  square: true,
  size: ButtonSize.XL,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  theme: ButtonThemes.BACKGROUND,
  square: true,
  size: ButtonSize.L,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '>',
  theme: ButtonThemes.OUTLINE,
  disabled: true,
};
