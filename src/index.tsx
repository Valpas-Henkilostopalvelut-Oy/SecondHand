import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/source-sans-pro";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";

const sentry_dsn = process.env.REACT_APP_sentry_environment;

Sentry.init({
  dsn: sentry_dsn,
  environment: process.env.NODE_ENV,
  integrations: [new Sentry.Replay()],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
