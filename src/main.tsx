import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./RTK/store";
import { BrowserRouter } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "moviePage/:id",
//     element: <MoviePage />
//   }
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
     {/* <RouterProvider router={router} /> */}
  </Provider>
);
