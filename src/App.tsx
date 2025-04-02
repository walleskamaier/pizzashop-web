import "./global.css";

import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { router } from "./routes";
import { ThemeProvider } from "./components/theme/theme.provider";

export function App() {
  return (
    <>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
