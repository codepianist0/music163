import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ListWrapper } from "./style"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import RankingItem from "../ranking-item"
import { changeActiveIndexAction, fetchRankingInfoAction } from "../../store"
import { useNavigate } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

const RankingList: FC<IProps> = () => {
  const { rankingList, activeIndex } = useAppSelector(
    (state) => ({
      rankingList: state.ranking.rankingList,
      activeIndex: state.ranking.activeIndex,
    }),
    AppShallowEqual,
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  // 点击歌单
  function itemClickHandle(index: number) {
    // 切换active
    dispatch(changeActiveIndexAction(index))
    const id = Number(rankingList[index].id)
    // 跳转
    navigate(`/discover/ranking?id=${id}`, { replace: true })
    dispatch(fetchRankingInfoAction(id))
  }
  return (
    <ListWrapper>
      <div className="could">
        <div className="title">云音乐特色榜</div>
        {rankingList.slice(0, 4).map((item, index) => (
          <div key={item.id} onClick={() => itemClickHandle(index)}>
            <RankingItem info={item} isActive={activeIndex === index} />
          </div>
        ))}
      </div>
      <div className="global">
        <div className="title">全球媒体榜</div>
        {rankingList.slice(4).map((item, index) => (
          <div key={item.id} onClick={() => itemClickHandle(index + 4)}>
            <RankingItem info={item} isActive={activeIndex === index + 4} />
          </div>
        ))}
      </div>
    </ListWrapper>
  )
}

export default memo(RankingList)
