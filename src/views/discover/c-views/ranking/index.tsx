import React, { memo, useEffect } from "react"
import type { FC, ReactNode } from "react"
import { RankingWrapper } from "./style"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { fetchRankingInfoAction, fetchTopListInfoAction } from "./store"
import RankingList from "./c-cpns/ranking-list"
import Top from "./c-cpns/top"
import { useSearchParams } from "react-router-dom"
import SeactionHeaderV3 from "@/components/seaction-header-v3"
import SectionTable from "./c-cpns/table"
import Comment from "./c-cpns/comment"

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  const [searchParams] = useSearchParams()
  const { id } = Object.fromEntries(searchParams)
  const dispatch = useAppDispatch()

  const { rankingDetail } = useAppSelector(
    (state) => ({
      rankingDetail: state.ranking.rankingDetail,
    }),
    AppShallowEqual,
  )

  useEffect(() => {
    dispatch(fetchTopListInfoAction(Number(id)))
    dispatch(fetchRankingInfoAction(Number(id)))
  }, [])

  return (
    <RankingWrapper>
      <div className="content">
        <div className="left">
          <RankingList />
        </div>
        {Object.keys(rankingDetail).length > 0 && (
          <div className="right">
            <Top />
            <SeactionHeaderV3
              title="歌曲列表"
              subTitle={`${rankingDetail.tracks?.length}首歌`}
              playCounter={rankingDetail.playCount}
            />
            <SectionTable playlistInfo={rankingDetail} limit={rankingDetail.tracks?.length} />
            <div className="comment">
              <Comment />
            </div>
          </div>
        )}
      </div>
    </RankingWrapper>
  )
}

export default memo(Ranking)
