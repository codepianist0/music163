import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { getMenuListInfo, getMenuTags } from "../service"
import { formatTagsInfo } from "@/utils/format"

interface IInfo {
  order?: "new" | "hot"
  cat?: string
  limit?: number
  offset?: 0
}
export const fetchPlaylistInfo = createAsyncThunk("fetchPalylist", (info: IInfo, { dispatch }) => {
  const { order, cat, limit, offset } = info
  getMenuListInfo(order, cat, limit, offset).then((res) => {
    dispatch(changeSongMenuListAction(res.playlists))
  })
})
export const fetchTagsInfo = createAsyncThunk("fetchTags", (info, { dispatch }) => {
  getMenuTags().then((res: any) => {
    const info = formatTagsInfo(res.categories, res.sub)
    dispatch(changeTagsInfoAction(info))
  })
})

interface IIntialState {
  songMenuList: any[]
  tagsInfo: any
  filterInfo: IInfo
  isShowCate: boolean
  title: string
}
const initialState: IIntialState = {
  songMenuList: [],
  tagsInfo: {},
  filterInfo: {},
  isShowCate: false,
  title: "全部",
}

const playListSlice = createSlice({
  name: "palyList",
  initialState,
  reducers: {
    changeTagsInfoAction(state, { payload }) {
      state.tagsInfo = payload
    },
    changeSongMenuListAction(state, { payload }) {
      state.songMenuList = payload
    },
    changeFilterInfoAction(state, { payload }: PayloadAction<IInfo>) {
      state.filterInfo = payload
    },
    changeIsShowCateAction(state, { payload }) {
      state.isShowCate = payload
    },
    changeTitleAction(state, { payload }) {
      state.title = payload
    },
  },
})

export default playListSlice.reducer
export const {
  changeSongMenuListAction,
  changeTagsInfoAction,
  changeFilterInfoAction,
  changeIsShowCateAction,
  changeTitleAction,
} = playListSlice.actions
