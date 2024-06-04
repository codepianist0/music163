import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCommentsData, getPlaylistData, getRelatedData, getSubscribersData } from "../service"

// 获取歌单信息
export const fetchPlaylistAction = createAsyncThunk("fetchPlaylist", (id: number, { dispatch }) => {
  // 先清空store内容
  dispatch(changePlaylistAction({}))
  dispatch(changeHotCommentsAction([]))
  dispatch(changeNewCommentsAction([]))
  dispatch(changeSubscribersAction([]))

  // 获取歌单信息
  getPlaylistData(id).then((res) => {
    dispatch(changePlaylistAction(res.playlist))
  })
  // 获取评论信息
  getCommentsData(id).then((res) => {
    dispatch(changeHotCommentsAction(res.hotComments))
    dispatch(changeNewCommentsAction(res.comments))
    dispatch(changeTotalAction(res.total))
  })
  // 获取歌单订阅的人
  getSubscribersData(id).then((res) => {
    dispatch(changeSubscribersAction(res.subscribers))
  })
  // 获取相关推荐的歌单
  getRelatedData(id).then((res) => {
    dispatch(changeRelatedAction(res.playlists))
  })
})

interface ICommentArg {
  id: number
  page: number
}
// 获取评论信息
export const fetchCommentAction = createAsyncThunk(
  "fetchComment",
  (arg: ICommentArg, { dispatch }) => {
    const { id, page } = arg
    const limit = 20
    const offset = (page - 1) * 20
    getCommentsData(id, offset, limit).then((res) => {
      dispatch(changeNewCommentsAction(res.comments))
    })
  },
)

interface IInitial {
  playlistInfo: any
  total: number
  hotCommentsInfo: any[]
  newCommentsInfo: any[]
  subscribers: any[]
  related: any[]
}

const initialState: IInitial = {
  playlistInfo: {},
  total: -1,
  hotCommentsInfo: [],
  newCommentsInfo: [],
  subscribers: [],
  related: [],
}

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    changePlaylistAction(state, { payload }) {
      state.playlistInfo = payload
    },
    changeHotCommentsAction(state, { payload }) {
      state.hotCommentsInfo = payload
    },
    changeNewCommentsAction(state, { payload }) {
      state.newCommentsInfo = payload
    },
    changeTotalAction(state, { payload }) {
      state.total = payload
    },
    changeSubscribersAction(state, { payload }) {
      state.subscribers = payload
    },
    changeRelatedAction(state, { payload }) {
      state.related = payload
    },
  },
})

export const {
  changePlaylistAction,
  changeHotCommentsAction,
  changeNewCommentsAction,
  changeTotalAction,
  changeSubscribersAction,
  changeRelatedAction,
} = playlistSlice.actions
export default playlistSlice.reducer
