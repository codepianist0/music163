import React from "react"
import { Navigate } from "react-router-dom"
import type { RouteObject } from "react-router-dom"

const Discover = React.lazy(() => import("@/views/discover"))
const Recommend = React.lazy(() => import("@/views/discover/c-views/recommend"))
const Ranking = React.lazy(() => import("@/views/discover/c-views/ranking"))
const PlayLists = React.lazy(() => import("@/views/discover/c-views/playList"))
const Djradio = React.lazy(() => import("@/views/discover/c-views/djradio"))
const Singer = React.lazy(() => import("@/views/discover/c-views/singer"))
const Album = React.lazy(() => import("@/views/discover/c-views/album"))

const My = React.lazy(() => import("@/views/my"))
const Focus = React.lazy(() => import("@/views/focus"))
const Artist = React.lazy(() => import("@/views/artist"))
const Download = React.lazy(() => import("@/views/download"))
const Playlist = React.lazy(() => import("@/views/playlist"))
const Song = React.lazy(() => import("@/views/song"))

const routers: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        element: <Recommend />,
      },
      {
        path: "/discover/ranking",
        element: <Ranking />,
      },
      {
        path: "/discover/playlists",
        element: <PlayLists />,
      },
      {
        path: "/discover/djradio",
        element: <Djradio />,
      },
      {
        path: "/discover/singer",
        element: <Singer />,
      },
      {
        path: "/discover/album",
        element: <Album />,
      },
    ],
  },
  {
    path: "/my",
    element: <My />,
  },
  {
    path: "/focus",
    element: <Focus />,
  },
  {
    path: "/artist",
    element: <Artist />,
  },
  {
    path: "/download",
    element: <Download />,
  },
  {
    path: "/playlist",
    element: <Playlist />,
  },
  {
    path: "/song",
    element: <Song />,
  },
]

export default routers
