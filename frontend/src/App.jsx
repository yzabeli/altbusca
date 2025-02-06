import React from "react";
import Rotas from './router';
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Contexts/authContexts";

import "./styles/index.css";

export default function App() {
  return (
    <AuthProvider>
      <div>
        <Rotas />
        <ToastContainer
          autoClose={5000}
        />
      </div>
    </AuthProvider>
  );
};
