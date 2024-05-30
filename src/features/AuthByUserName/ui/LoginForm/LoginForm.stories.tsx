import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from '@/app/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  login: { username: '123', password: 'asdf' },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
  login: { username: '1234', password: '1234', error: 'error message' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  login: { isLoading: true },
})];
