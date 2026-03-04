import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { validateEnv } from "./config/env";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { PersistGate } from "redux-persist/integration/react";

// Validate environment variables on startup
validateEnv();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
);
