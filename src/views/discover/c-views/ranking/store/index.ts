import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCommentsInfo, getPlayListDetail, getToplistInfo } from "../service"

interface IIntialState {
  rankingList: any[]
  activeIndex: number
  rankingDetail: any
  hotComment: any[]
  comment: any[]
}
const initialState: IIntialState = {
  rankingList: [],
  activeIndex: 0,
  rankingDetail: {},
  hotComment: [],
  comment: [],
}

export const fetchTopListInfoAction = createAsyncThunk(
  "topListInfo",
  (id: number, { dispatch }) => {
    getToplistInfo().then((res) => {
      dispatch(changeRankingListAction(res.list))
      // 设置activeIndex
      const index = res.list.findIndex((item: any) => item.id === id)
      dispatch(changeActiveIndexAction(index))
    })
  },
)

export const fetchRankingInfoAction = createAsyncThunk(
  "fetchRanking",
  (id: number, { dispatch }) => {
    // 清空数据
    dispatch(changeRankingDetailAction({}))
    dispatch(changeCommentsAction([]))
    dispatch(changeHotCommentsAction([]))

    getPlayListDetail(id).then((res) => {
      dispatch(changeRankingDetailAction(res.playlist))
    })
    getCommentsInfo(id).then((res) => {
      dispatch(changeCommentsAction(res.comments))
      dispatch(changeHotCommentsAction(res.hotComments))
    })
  },
)
interface IInfo {
  id: number
  limit: number
  page: number
}
export const fetchCommentInfo = createAsyncThunk("listComment", (info: IInfo, { dispatch }) => {
  const { id, limit, page } = info
  const offset = (page - 1) * 20
  getCommentsInfo(id, limit, offset).then((res) => {
    dispatch(changeCommentsAction(res.comments))
  })
})

const rankingSlice = createSlice({
  name: "ranking",
  initialState,
  reducers: {
    changeRankingListAction(state, { payload }) {
      state.rankingList = payload
    },
    changeActiveIndexAction(state, { payload }) {
      state.activeIndex = payload
    },
    changeRankingDetailAction(state, { payload }) {
      state.rankingDetail = payload
    },
    changeHotCommentsAction(state, { payload }) {
      state.hotComment = payload
    },
    changeCommentsAction(state, { payload }) {
      state.comment = payload
    },
  },
})

export default rankingSlice.reducer

export const {
  changeRankingListAction,
  changeActiveIndexAction,
  changeRankingDetailAction,
  changeHotCommentsAction,
  changeCommentsAction,
} = rankingSlice.actions
