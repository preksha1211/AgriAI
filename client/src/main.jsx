import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#163A2A",
            color: "#fff",
            border: "1px solid #2D6A4F",
          },
        }}
      />
    </AuthProvider>
  </React.StrictMode>
);