import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import i18n from "./i18n/i18n";
import { I18nextProvider } from "react-i18next";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </QueryClientProvider>
);
