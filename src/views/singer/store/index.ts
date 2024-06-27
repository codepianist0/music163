import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {
  getArtistAlbums,
  getArtistDescription,
  getArtistMV,
  getArtistSongs,
  getSingerInfo,
  getTopArtist,
} from "../service"

export const fetchSingerInfoAction = createAsyncThunk("fetchSinger", (id: number, { dispatch }) => {
  // 获取歌手信息
  getSingerInfo(id).then((res) => {
    dispatch(changeSingerInfoAction(res.data))
    dispatch(changeArtistAction(res.data.artist.name))
  })
  // 获取热门单曲和部分信息
  getArtistSongs(id).then((res) => {
    dispatch(changeHotSongsAction(res.hotSongs))
  })
  // 获取热门歌手
  getTopArtist().then((res) => {
    dispatch(changeHotArtistAction(res.artists))
  })
})
export const fetchArtistAlbumAction = createAsyncThunk("fetchAlbum", (args: any, { dispatch }) => {
  // 获取歌手专辑
  const { id } = args
  getArtistAlbums(id).then((res) => {
    dispatch(changeAlbumsAction(res.hotAlbums))
    dispatch(changeAlbumTotalAction(res.hotAlbums.length))
  })
})

interface IMVSearch {
  id: number
  limit?: number
  offset?: number
}
export const fetchMvAction = createAsyncThunk("fetchMV", (args: IMVSearch, { dispatch }) => {
  const { id, limit = 10000, offset = 0 } = args
  getArtistMV(id, limit, offset).then((res) => {
    dispatch(changeMVAction(res.mvs))
    dispatch(changeMVTotalAction(res.mvs.length))
  })
})
export const fetchDescriptionAction = createAsyncThunk("fetchDesc", (id: number, { dispatch }) => {
  getArtistDescription(id).then((res) => {
    dispatch(changeDescriptionAction(res))
  })
})

interface IinitialState {
  singerInfo: any
  hotSongs: any[]
  albums: any[]
  albumsTotal: number
  mv: any[]
  mvTotal: number
  description: any
  artistName: string
  hotArtist: any[]
  singerId: number
}

const initialState: IinitialState = {
  singerInfo: {},
  hotSongs: [],
  albums: [],
  albumsTotal: 0,
  mv: [],
  mvTotal: 0,
  description: {},
  artistName: "",
  hotArtist: [],
  singerId: 0,
}

const singerSlice = createSlice({
  name: "singer",
  initialState,
  reducers: {
    changeSingerInfoAction(state, { payload }) {
      state.singerInfo = payload
    },
    changeHotSongsAction(state, { payload }) {
      state.hotSongs = payload
    },
    changeAlbumsAction(state, { payload }) {
      state.albums = payload
    },
    changeAlbumTotalAction(state, { payload }) {
      state.albumsTotal = payload
    },
    changeMVAction(state, { payload }) {
      state.mv = payload
    },
    changeMVTotalAction(state, { payload }) {
      state.mvTotal = payload
    },
    changeDescriptionAction(state, { payload }) {
      state.description = payload
    },
    changeArtistAction(state, { payload }) {
      state.artistName = payload
    },
    changeHotArtistAction(state, { payload }) {
      state.hotArtist = payload
    },
    changeSingerIdAction(state, { payload }) {
      state.singerId = payload
    },
  },
})
export const {
  changeSingerInfoAction,
  changeHotSongsAction,
  changeAlbumsAction,
  changeAlbumTotalAction,
  changeMVAction,
  changeMVTotalAction,
  changeDescriptionAction,
  changeArtistAction,
  changeHotArtistAction,
  changeSingerIdAction,
} = singerSlice.actions
export default singerSlice.reducer
