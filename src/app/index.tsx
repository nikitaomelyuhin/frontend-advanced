import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import App from './App';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';

render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense fallback="">
                <App />
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
