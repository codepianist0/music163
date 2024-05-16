import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPlaylistData } from "../service"

interface IInitial {
  playlistInfo: any
}

export const fetchPlaylistAction = createAsyncThunk("fetchPlaylist", (id: number, { dispatch }) => {
  dispatch(changePlaylistAction({}))
  getPlaylistData(id).then((res) => {
    dispatch(changePlaylistAction(res.playlist))
  })
})

const initialState: IInitial = {
  playlistInfo: {},
}

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    changePlaylistAction(state, { payload }) {
      state.playlistInfo = payload
    },
  },
})

export const { changePlaylistAction } = playlistSlice.actions
export default playlistSlice.reducer
