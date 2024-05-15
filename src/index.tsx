import React from "react"
import ReactDOM from "react-dom/client"

import App from "@/App"
import { Provider } from "react-redux"
import store from "./store"
import { ThemeProvider } from "styled-components"
import theme from "./assets/theme"

// css样式
import "normalize.css"
import "@/assets/css/index.less"
import { HashRouter } from "react-router-dom"
import { ConfigProvider } from "antd"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <ConfigProvider
          theme={{
            components: {
              Message: {
                contentBg: "rgca(0,0,0,.5)",
              },
            },
          }}
        >
          <App />
        </ConfigProvider>
      </HashRouter>
    </ThemeProvider>
  </Provider>,
  // <React.StrictMode>
  // </React.StrictMode>,
)
