import { configureStore } from "@reduxjs/toolkit"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import playerReducer from "@/views/player/store"
import PlaylistReducer from "@/views/playlist/store"
import songReducer from "@/views/song/store"
import singerReducer from "@/views/singer/store"
import userReducer from "@/views/user/store"
import discoverRecommendReducer from "@/views/discover/c-views/recommend/store"
import discoverRankingReducer from "@/views/discover/c-views/ranking/store"
import discoverPlayListReducer from "@/views/discover/c-views/playList/store"
import discoverDjradioReducer from "@/views/discover/c-views/djradio/store"
import discoverSingerReducer from "@/views/discover/c-views/singer/store"
const store = configureStore({
  reducer: {
    recommend: discoverRecommendReducer,
    ranking: discoverRankingReducer,
    discoverPlaylist: discoverPlayListReducer,
    player: playerReducer,
    playlist: PlaylistReducer,
    song: songReducer,
    djradio: discoverDjradioReducer,
    singer: discoverSingerReducer,
    hSinger: singerReducer,
    user: userReducer,
  },
})

// 获取 store.getState函数的返回值 and dispatch的类型
type RootState = ReturnType<typeof store.getState>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const AppShallowEqual = shallowEqual

export default store
