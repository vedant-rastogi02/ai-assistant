import React from "react";
import ReactDOM from "react-dom/client";
import img from "./images/ai.png";
import "./index.css";

import { PrivyProvider } from "@privy-io/react-auth";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="cmr3tai77000s0cjub4zre8h9"
      clientId="client-WY6b8bsWyPcXpuvPKEmGpfgnfaFLwSdoNWbtnZ9GTJhd5"
      config={{
        // Display email and wallet as login methods
        loginMethods: [
          "email",
          "wallet",
          "google",
          "sms",
          "github",
          "twitter",
          "discord",
        ],
        // Customize Privy's appearance in your app
        appearance: {
          theme: "dark",
          accentColor: "#676FFF",
          logo: img,
        },

        // Create embedded wallets for users who don't have a wallet

        embeddedWallets: {
          ethereum: {
            createOnLogin: "users-without-wallets",
          },
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>,
);
