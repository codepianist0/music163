import { configureStore } from "@reduxjs/toolkit"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import recommendReducer from "@/views/discover/c-views/recommend/store"
import playerReducer from "@/views/player/store"
import PlaylistReducer from "@/views/playlist/store"
const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer,
    playlist: PlaylistReducer,
  },
})

// 获取 store.getState函数的返回值 and dispatch的类型
type RootState = ReturnType<typeof store.getState>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const AppShallowEqual = shallowEqual

export default store
