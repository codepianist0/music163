import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getSingerList } from "../server"

interface ISearchInfo {
  limit?: number
  offset?: number
  type?: number
  area?: number
  initial?: number
  id?: number
}

export const fetchSingerInfoAction = createAsyncThunk(
  "fetchSingerInfo",
  (searchInfo: ISearchInfo, { dispatch }) => {
    const { limit = 100, offset = 0, type = -1, area = -1, initial, id } = searchInfo
    getSingerList(limit, offset, type, area, initial, id).then((res) => {
      dispatch(changeSingerListAction(res.artists))
    })
  },
)

interface IinitialState {
  singerList: any
  title: string
  area: number
  id: number
  type: number
}

const initialState: IinitialState = {
  singerList: [],
  title: "热门歌手",
  area: -1,
  id: -1,
  type: -1,
}

const singerSlice = createSlice({
  name: "singer",
  initialState,
  reducers: {
    changeSingerListAction(state, { payload }) {
      state.singerList = payload
    },
    changetitleAction(state, { payload }) {
      state.title = payload
    },
    changeShiftInfoAction(state, { payload }) {
      const { area, id, type } = payload
      state.area = area
      state.id = id
      state.type = type
    },
  },
})

export const {
  changeSingerListAction,
  changetitleAction,
  changeShiftInfoAction,
  // changeUserIdAction,
} = singerSlice.actions

export default singerSlice.reducer
