import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {
  getDjBanner,
  getRadioHotById,
  getRecommendProgram,
  getRecommendType,
  getTopProgram,
} from "../service"

export const fetchDjRadioInfo = createAsyncThunk("djradioInfo", (_, { dispatch }) => {
  getDjBanner().then((res) => {
    const info = chunkArray(res.categories, 18)
    dispatch(changeBannerInfoAction(info))
  })
  getRecommendProgram(10, 0).then((res) => {
    dispatch(changeRecommendProgramAction(res.programs))
  })
  getTopProgram(10, 0).then((res) => {
    dispatch(changeToplistProgramAction(res.toplist))
  })
  // 音乐播客
  getRecommendType(2).then((res) => {
    dispatch(changeMusicdjRadiosAction(res.djRadios))
  })
  // 生活
  getRecommendType(6).then((res) => {
    dispatch(changeLiveDjRadioAction(res.djRadios))
  })
  // 情感
  getRecommendType(3).then((res) => {
    dispatch(changeEmotionDjRadioAction(res.djRadios))
  })
  // 创作翻唱
  getRecommendType(2001).then((res) => {
    dispatch(changeCoverSongDjRadioAction(res.djRadios))
  })
  // 知识
  getRecommendType(11).then((res) => {
    dispatch(changeKnowledgeDjRadiosDjRadioAction(res.djRadios))
  })
})

interface IInfo {
  id: number
  limit?: number
  offset?: number
}
export const fetchDjradioByCategory = createAsyncThunk(
  "fetchDjradioByType",
  (info: IInfo, { dispatch }) => {
    const { id, limit = 26, offset = 0 } = info
    getRecommendType(id).then((res) => {
      dispatch(changeCategoryNewDjradioAction(res.djRadios))
    })
    getRadioHotById(id, limit, offset).then((res: any) => {
      dispatch(changeCategoryRankDjradioAction(res.djRadios))
      dispatch(changeTotalCountAction(res.count))
    })
  },
)

interface IINtialState {
  bannerInfo: any[]
  radioType: string
  isSelect: boolean
  recommendProgram: any[]
  toplistProgram: any[]
  musicDjRadios: any[]
  liveDjRadios: any[]
  emotionDjRadios: any[]
  coverSongDjRadios: any[]
  knowledgeDjRadios: any[]
  categoryNewDjradio: any[]
  categoryRankDjradio: any[]
  totalCount: number
}
const initialState: IINtialState = {
  bannerInfo: [],
  radioType: "all",
  isSelect: false, // 是否选择类别
  // 不分类的数据
  recommendProgram: [],
  toplistProgram: [],
  musicDjRadios: [],
  liveDjRadios: [],
  emotionDjRadios: [],
  coverSongDjRadios: [],
  knowledgeDjRadios: [],
  // 分类的数据
  categoryNewDjradio: [],
  categoryRankDjradio: [],
  totalCount: 0,
}

const DJRadioSlice = createSlice({
  name: "djradio",
  initialState,
  reducers: {
    changeBannerInfoAction(state, { payload }) {
      state.bannerInfo = payload
    },
    changeRradioTypeAction(state, { payload }) {
      state.radioType = payload
    },
    changeRecommendProgramAction(state, { payload }) {
      state.recommendProgram = payload
    },
    changeToplistProgramAction(state, { payload }) {
      state.toplistProgram = payload
    },
    changeMusicdjRadiosAction(state, { payload }) {
      state.musicDjRadios = payload
    },
    changeLiveDjRadioAction(state, { payload }) {
      state.liveDjRadios = payload
    },
    changeEmotionDjRadioAction(state, { payload }) {
      state.emotionDjRadios = payload
    },
    changeCoverSongDjRadioAction(state, { payload }) {
      state.coverSongDjRadios = payload
    },
    changeKnowledgeDjRadiosDjRadioAction(state, { payload }) {
      state.knowledgeDjRadios = payload
    },
    changeIsSelectAction(state, { payload }) {
      state.isSelect = payload
    },
    changeCategoryNewDjradioAction(state, { payload }) {
      state.categoryNewDjradio = payload
    },
    changeCategoryRankDjradioAction(state, { payload }) {
      state.categoryRankDjradio = payload
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload
    },
  },
})

export const {
  changeBannerInfoAction,
  changeRradioTypeAction,
  changeRecommendProgramAction,
  changeToplistProgramAction,
  changeMusicdjRadiosAction,
  changeLiveDjRadioAction,
  changeEmotionDjRadioAction,
  changeCoverSongDjRadioAction,
  changeKnowledgeDjRadiosDjRadioAction,
  changeIsSelectAction,
  changeCategoryNewDjradioAction,
  changeCategoryRankDjradioAction,
  changeTotalCountAction,
} = DJRadioSlice.actions
export default DJRadioSlice.reducer

// 处理轮播数据
function chunkArray(array: any[], chunkSize: number) {
  const result = []
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    result.push(chunk)
  }
  return result
}
