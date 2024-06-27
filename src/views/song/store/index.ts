import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCommentInfo, getSimiInfo, getSongInfo } from "../service"
import { getSongLyric } from "@/views/player/server"
import { formatLyric, getLyric } from "@/utils/lyric"

// 获取歌曲信息
export const fetchSongInfoAction = createAsyncThunk("fetchSongInfo", (id: number, { dispatch }) => {
  // 1. 清空歌单信息
  dispatch(changeSongInfoAction({}))
  dispatch(changeLyricAction(""))
  dispatch(changeHotCommentsAction([]))
  dispatch(changeCommentsAction([]))
  dispatch(changeAlbumTotalAction(0))
  dispatch(changeSimiAction([]))

  // 2. 获取新的歌单信息
  getSongInfo(id).then((res) => {
    dispatch(changeSongInfoAction(res.songs?.[0]))
  })
  getSongLyric(id).then((res) => {
    const lyric = formatLyric(res.lrc?.lyric)
    dispatch(changeLyricAction(getLyric(lyric)))
  })
  getCommentInfo(id).then((res) => {
    dispatch(changeHotCommentsAction(res.hotComments))
    dispatch(changeCommentsAction(res.comments))
    dispatch(changeAlbumTotalAction(res.total))
  })
  getSimiInfo(id).then((res) => {
    dispatch(changeSimiAction(res.songs))
  })
})
// 获取分页评论
export const fetchCommentAction = createAsyncThunk("fetchComment", (info: any, { dispatch }) => {
  getCommentInfo(info.id, 20, info.offset).then((res) => {
    dispatch(changeCommentsAction(res.comments))
  })
})

interface IInitialState {
  songInfo: any
  lyric: string
  hotComments: any[]
  comments: any[]
  total: number
  simi: any[]
}
const initialState: IInitialState = {
  songInfo: {},
  lyric: "",
  hotComments: [],
  comments: [],
  total: 0,
  simi: [],
}

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    changeSongInfoAction(state, { payload }) {
      state.songInfo = payload
    },
    changeLyricAction(state, { payload }) {
      state.lyric = payload
    },
    changeHotCommentsAction(state, { payload }) {
      state.hotComments = payload
    },
    changeCommentsAction(state, { payload }) {
      state.comments = payload
    },
    changeAlbumTotalAction(state, { payload }) {
      state.total = payload
    },
    changeSimiAction(state, { payload }) {
      state.simi = payload
    },
  },
})

export const {
  changeSongInfoAction,
  changeLyricAction,
  changeHotCommentsAction,
  changeCommentsAction,
  changeAlbumTotalAction,
  changeSimiAction,
} = songSlice.actions
export default songSlice.reducer
