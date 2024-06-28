import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {
  getBannerData,
  getHotRecommendData,
  getNewAlbumData,
  getResidentSingerData,
  getTopRankingData,
} from "../service"

export const fetchRecommendDataAction = createAsyncThunk("recommend", (_, { dispatch }) => {
  getBannerData().then((res) => {
    dispatch(changeBannersAction(res.banners))
  })
  getHotRecommendData(8).then((res) => {
    dispatch(changeHotRecommendAction(res.result))
  })
  getNewAlbumData().then((res) => {
    dispatch(changeNewAlbumAction(res.albums))
  })
  getResidentSingerData().then((res) => {
    dispatch(changeResidentSingerAction(res.list.artists))
  })
})

const rankingIds = [19723756, 3779629, 2884035]

export const fetchRrankingDataAction = createAsyncThunk("rankingdata", (_, { dispatch }) => {
  // 获取到三个结果后,统一管理
  const promise: Promise<any>[] = []
  rankingIds.forEach((item) => {
    promise.push(getTopRankingData(item))
  })
  Promise.all(promise).then((res) => {
    const playList = res.map((item) => {
      return item.playlist
    })
    dispatch(changeTopRankingAction(playList))
  })
})

interface IIntialState {
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]
  topRanking: any[]
  residentSinger: any[]
}

const initialState: IIntialState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  topRanking: [],
  residentSinger: [],
}

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    },
    changeTopRankingAction(state, { payload }) {
      state.topRanking = payload
    },
    changeResidentSingerAction(state, { payload }) {
      state.residentSinger = payload
    },
  },
})

const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeTopRankingAction,
  changeResidentSingerAction,
} = recommendSlice.actions

export default recommendSlice.reducer
