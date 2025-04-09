import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/Store";
import Auth from "./Components/Auth/Auth";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Home/Homepage";
import Category from "./Components/Category/Category";

function App() {
  const Layout = () => {
    return (
      <>
        <Provider store={store}>
          <div className="flex flex-col ">
            <div className="text-4xl h-[2.2em] bg-blue-500">
              <Header />
            </div>
            <div className="flex flex-col">
              <Outlet />
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
          path: "/auth",
          element: <Auth />,
        },
        {
          path: "/home",
          element: <Homepage />,
        },
        {
          path :"/category",
          element : <Category/>
        }
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
