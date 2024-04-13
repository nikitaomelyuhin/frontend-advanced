import {render} from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@/shared/providers/ThemeProvider";
import {Suspense} from "react";

render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense fallback={''}>
                <App />
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>
    ,
    document.getElementById('root')
)