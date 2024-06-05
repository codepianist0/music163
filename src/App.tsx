import React, { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import routers from "@/router"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"
import Player from "./views/player"
import useScrollToTop from "./hooks/useScrollToTop"

function App() {
  useScrollToTop()
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">{useRoutes(routers)}</Suspense>
      <AppFooter />
      <Player />
    </div>
  )
}

export default App
