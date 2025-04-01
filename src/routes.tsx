import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./_layouts/app";
import { AuthLayout } from "./_layouts/auth";
import { Dashboard } from "./pages/app/dashboard";
import { SignUp } from "./pages/auth/sign-up";
import { SignIn } from "./pages/auth/sign-in";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);
