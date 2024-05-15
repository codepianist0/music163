import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getSongDetailInfo, getSongLyric, getSongMenuInfo } from "../server"
import { yugeEvent } from "@/utils/event-bus"
import { formatLyric } from "@/utils/lyric"

interface IIntialState {
  currentSong: any
  currentLyric: ILyric[]
  lyricIndex: number
  songMenu: any[]
  menuIndex: number
}
interface ILyric {
  time: number
  text: string
}

const initialState: IIntialState = {
  currentSong: {},
  currentLyric: [],
  lyricIndex: 0,
  songMenu: [],
  menuIndex: 0,
}

export const fetchSongDetailAction = createAsyncThunk("songDetail", (_, { dispatch, getState }) => {
  getSongDetailInfo().then((res) => {
    console.log(res)
  })
})
export const fetchSongMenuAction = createAsyncThunk("songMenu", (id: number, { dispatch }) => {
  getSongMenuInfo(id).then((res) => {
    const songList = res.playlist.tracks
    dispatch(changeSongMenuAction(songList))
    dispatch(changeCurrentSongAction(songList[0]))
    dispatch(changemenuIndexAction(0))
    dispatch(fetchSongLyricAction(songList[0].id))
    // 切换完歌单后播放
    yugeEvent.emit("changePlay", true)
  })
})
export const fetchSongLyricAction = createAsyncThunk("songLyric", (id: number, { dispatch }) => {
  getSongLyric(id).then((res) => {
    const lyric = formatLyric(res?.lrc?.lyric)
    dispatch(changeCurrentLyricAction(lyric))
  })
})

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeCurrentLyricAction(state, { payload }) {
      state.currentLyric = payload
    },
    changeSongMenuAction(state, { payload }) {
      state.songMenu = payload
    },
    changemenuIndexAction(state, { payload }) {
      state.menuIndex = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
  },
})

export const {
  changeCurrentSongAction,
  changeCurrentLyricAction,
  changeSongMenuAction,
  changemenuIndexAction,
  changeLyricIndexAction,
} = playerSlice.actions

export default playerSlice.reducer
