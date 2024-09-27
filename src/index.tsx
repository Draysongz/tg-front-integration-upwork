import ReactDOM from "react-dom/client";
// import '@twa-dev/sdk';

import { Root } from "@/components/Root";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Root />
  </QueryClientProvider>
);
