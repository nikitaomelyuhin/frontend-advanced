import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { DeepPartial } from '@reduxjs/toolkit';
import i18nForTests from '@/app/config/i18n/i18nForTests';
import { StateSchema, StoreProvider } from '@/shared/providers/StoreProvider';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  const {
    route = '/',
    initialState,
  } = options;
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}
