import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  profileData: {
    first: 'Nikita',
    lastname: 'Omelyukhin',
    age: 30,
    city: 'Moscow',
    avatar: 'https://kartinki.pics/uploads/posts/2022-02/1645857326_1-kartinkin-net-p-dzherri-kartinki-1.jpg',
    currency: Currency.RUB,
    country: Country.Russia,
  },
};

export const Loading = Template.bind({});

Loading.args = {
  isLoading: true,
};

export const Error = Template.bind({});

Error.args = {
  error: 'Some error message',
};
