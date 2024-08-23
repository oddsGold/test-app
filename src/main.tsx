import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {store} from "./redux/store.ts";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
