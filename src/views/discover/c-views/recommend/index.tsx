import React, { memo, useEffect } from "react"
import type { FC, ReactNode } from "react"

import { RecommendWrapper } from "./style"
import { useAppDispatch } from "@/store"
import { fetchRecommendDataAction, fetchRrankingDataAction } from "./store"

import Banner from "./c-cpns/top-banner"
import HotRecommend from "./c-cpns/hot-recommend"
import NewAlbum from "./c-cpns/new-album"
import RankingList from "./c-cpns/ranking-list"
import Login from "./c-cpns/right-login"
import ResidentSinger from "./c-cpns/right-resident-singer"
import HotAnchor from "./c-cpns/right-hot-anchor"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRrankingDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <Banner />
      <div className="content">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <RankingList />
        </div>
        <div className="right">
          <Login />
          <ResidentSinger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
