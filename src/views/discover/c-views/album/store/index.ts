import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getHotAlbum, getNewAlbum } from "../service"

interface IArgs {
  limit: number
  offset: number
  area?: string
}
export const fetchAlbumInfoAction = createAsyncThunk("albuminfo", (args: IArgs, { dispatch }) => {
  const { limit, offset } = args
  getHotAlbum().then((res) => {
    dispatch(changeHotAlbumAction(res.albums))
  })
  getNewAlbum(limit, offset).then((res) => {
    dispatch(changeNewAlbumAction(res.albums))
    dispatch(changeTotalAction(res.total))
  })
})
export const fetchNewAlbumAction = createAsyncThunk("newAlbum", (args: IArgs, { dispatch }) => {
  const { limit, offset, area } = args
  getNewAlbum(limit, offset, area).then((res) => {
    dispatch(changeNewAlbumAction(res.albums))
    dispatch(changeTotalAction(res.total))
  })
})

interface IInitialState {
  hotAlbum: any[]
  newAlbum: any[]
  total: number
}

const initialState: IInitialState = {
  hotAlbum: [],
  newAlbum: [],
  total: 0,
}

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    changeHotAlbumAction(state, { payload }) {
      state.hotAlbum = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    },
    changeTotalAction(state, { payload }) {
      state.total = payload
    },
  },
})

export const { changeHotAlbumAction, changeNewAlbumAction, changeTotalAction } = albumSlice.actions

export default albumSlice.reducer
