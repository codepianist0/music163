import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAlbum, getConcern, getFans, getJDRadio, getUserEvent, getUserInfo } from "../service"

interface IUserArgs {
  uid: number
  limit?: number
  offset?: number
}
export const fetchUserInfoAction = createAsyncThunk("userInfo", (args: IUserArgs, { dispatch }) => {
  const { uid, limit = 1, offset = 0 } = args
  getUserInfo(uid).then((res) => {
    dispatch(changeUserInfoAction(res))
  })
  getUserEvent(uid, limit, offset).then((res) => {
    dispatch(changeEventInfoAction(res.events))
    dispatch(changeEventSizeAction(res.size))
  })
  getConcern(uid, limit, offset).then((res) => {
    dispatch(changeConcernAction(res.follow))
    dispatch(changeConcernSizeAction(res.touchCount))
  })
  getFans(uid, limit, offset).then((res) => {
    dispatch(changeFansInfoAction(res.followeds))
    dispatch(changeFansSizeAction(res.size))
  })
  getJDRadio(uid).then((res) => {
    dispatch(changeDJRadioCountAction(res.subCount))
    dispatch(changeDJRadioAction(res.djRadios))
  })
  getAlbum(uid).then((res) => {
    dispatch(changeAlbumAction(res.playlist))
  })
})

interface IInitialState {
  userInfo: any
  eventSize: number
  eventInfo: any[]
  concernInfo: any[]
  concernSize: number
  fansInfo: any[]
  fansSize: number
  DJRadio: any[]
  subCount: number
  album: any[]
}

const initialState: IInitialState = {
  userInfo: {},
  eventInfo: [],
  eventSize: 0,
  concernInfo: [],
  concernSize: 0,
  fansInfo: [],
  fansSize: 0,
  DJRadio: [],
  subCount: 0,
  album: [],
}

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUserInfoAction(state, { payload }) {
      state.userInfo = payload
    },
    changeEventInfoAction(state, { payload }) {
      state.eventInfo = payload
    },
    changeEventSizeAction(state, { payload }) {
      state.eventSize = payload
    },
    changeConcernAction(state, { payload }) {
      state.concernInfo = payload
    },
    changeConcernSizeAction(state, { payload }) {
      state.concernSize = payload
    },
    changeFansInfoAction(state, { payload }) {
      state.fansInfo = payload
    },
    changeFansSizeAction(state, { payload }) {
      state.fansSize = payload
    },
    changeDJRadioAction(state, { payload }) {
      state.DJRadio = payload
    },
    changeDJRadioCountAction(state, { payload }) {
      state.subCount = payload
    },
    changeAlbumAction(state, { payload }) {
      state.album = payload
    },
  },
})

export const {
  changeUserInfoAction,
  changeEventInfoAction,
  changeEventSizeAction,
  changeConcernAction,
  changeConcernSizeAction,
  changeFansInfoAction,
  changeFansSizeAction,
  changeDJRadioAction,
  changeDJRadioCountAction,
  changeAlbumAction,
} = UserSlice.actions

export default UserSlice.reducer
