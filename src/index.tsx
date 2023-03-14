import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/source-sans-pro";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { Amplify, Hub, DataStore } from "aws-amplify";
import awsmobile from "./aws-exports.js";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

Amplify.configure(awsmobile);

Hub.listen("auth", async (hubData: any) => {
  const { payload: event } = hubData;
  switch (event.event) {
    case "signIn":
      console.log("signed in");
      await DataStore.start();
      break;
    case "signOut":
      console.log("signed out");
      await DataStore.clear();
      await DataStore.stop();
      break;
    default:
      break;
  }
});

Hub.listen("datastore", async (data) => {
  const { payload: event } = data;
  switch (event.event) {
    case "ready":
      console.log(event.event);
      break;
    default:
      break;
  }
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
