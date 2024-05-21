import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getSongLyric, getSongMenuInfo } from "../server"
import { yugeEvent } from "@/utils/event-bus"
import { formatLyric } from "@/utils/lyric"
import { LocalCache } from "@/utils/cache"
import { LYRIC, MENU_INDEX, SONG, SONG_MENU } from "@/global"

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
  currentSong: LocalCache.getCache(SONG, {}),
  currentLyric: LocalCache.getCache(LYRIC, {}),
  lyricIndex: 0,
  songMenu: LocalCache.getCache(SONG_MENU, []),
  menuIndex: LocalCache.getCache(MENU_INDEX, 0),
}

// 添加一首歌曲
// export const fetchSongDetailAction = createAsyncThunk("songDetail", (_, { dispatch, getState }) => {
//   getSongDetailInfo().then((res) => {
//     console.log(res)
//   })
// })
// 切换新的歌单
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
// 获取歌词
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
      LocalCache.setCache(SONG, payload)
    },
    changeCurrentLyricAction(state, { payload }) {
      state.currentLyric = payload
      LocalCache.setCache(LYRIC, payload)
    },
    changeSongMenuAction(state, { payload }) {
      state.songMenu = payload
      LocalCache.setCache(SONG_MENU, payload)
    },
    changemenuIndexAction(state, { payload }) {
      state.menuIndex = payload
      LocalCache.setCache(MENU_INDEX, payload)
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
