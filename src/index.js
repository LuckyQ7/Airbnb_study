import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "antd/dist/reset.css";
import "./assets/css/index.less";

import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";

import { HashRouter } from "react-router-dom";

import { store } from "./store/index.js";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";
import theme from "./theme/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ConfigProvider locale={zhCN}>
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Provider>
      </Suspense>
    </HashRouter>
  </ConfigProvider>
);
