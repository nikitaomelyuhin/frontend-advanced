import { Story } from '@storybook/react';
import { Theme } from '@/shared/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  document.body.className = `app ${theme}`;
  return (

    <div id="app" className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
};
