import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBannerData } from "../service"

export const fetchBannerListAction = createAsyncThunk("banners", async (arg, { dispatch }) => {
  const res = await getBannerData()
  dispatch(changeBannersAction(res.banners))
})

interface IIntialState {
  banners: any[]
}

const initialState: IIntialState = {
  banners: [],
}

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
  },
})

const { changeBannersAction } = recommendSlice.actions

export default recommendSlice.reducer
