/* @refresh reload */
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router } from "@solidjs/router"; // Ensure you import these components
import Home from './components/Home';

// const routes = [
//   {
//     path: "/nice",
//     component: lazy(() => import("./components/Nice.jsx")), 
//   },
//   {
//     path: "/about",
//     component: lazy(() => import("./components/About.jsx")), 
//   },
//   {
//     path: "/contact",
//     component: lazy(() => import("./components/Contact.jsx")), 
//   },
//   {
//     path: "/",
//     component: Home, 
//   }
// ];

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: lazy(() => import("./components/About.jsx")) },
    { path: "/contact", component: lazy(() => import("./components/Contact.jsx")) },
    { path: "/blog/:id", component: lazy(() => import("./components/BlogDetails.jsx")) },
];

render(
  () => (
    <Router>{routes}</Router>
  ),
  document.getElementById("app")
);
