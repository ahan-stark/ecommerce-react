import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/Store";
import Auth from "./Components/Auth/Auth";

function App() {
  const Layout = () => {
    return (
      <>
        <Provider store={store}>
          <div className="flex flex-col">
            <div className="text-4xl h-[2.2em] bg-orange-500">Header</div>
            <div
              className ="flex flex-col"
              style={{ minHeight: "calc(100vh - 4.97em)" }}
            >
              <Outlet></Outlet>
            </div>
          </div>
        </Provider>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Auth />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
