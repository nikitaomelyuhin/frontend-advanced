import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import App from './App';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/ui/ErrorBoundary/ErrorBoundary';
import { StoreProvider } from '@/shared/providers/StoreProvider';

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
