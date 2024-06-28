import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ListWrapper } from "./style"
import SeactionHeaderV1 from "@/components/seaction-header-v1"
import { AppShallowEqual, useAppSelector } from "@/store"
import RankingListItem from "../ranking-list-item"
import { useNavigate } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

const RrankingList: FC<IProps> = () => {
  const navigate = useNavigate()
  const { topRanking } = useAppSelector(
    (state) => ({
      topRanking: state.recommend.topRanking,
    }),
    AppShallowEqual,
  )
  function moreClick() {
    navigate(`/discover/ranking?id=${topRanking[0].id}`)
  }

  return (
    <ListWrapper>
      <SeactionHeaderV1 title="榜单" moreClick={moreClick} />
      <div className="sprite_recommend_top_bg content">
        {topRanking.map((item) => (
          <RankingListItem key={item.id} listInfo={item} />
        ))}
      </div>
    </ListWrapper>
  )
}

export default memo(RrankingList)
