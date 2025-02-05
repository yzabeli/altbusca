import React from "react";
import Rotas from './router';
import { ToastContainer } from "react-toastify";

import "./styles/index.css";

export default function App() {
  return (
    <div>
      <Rotas />
      <ToastContainer
        autoClose={5000}
      />
    </div>
  );
};
