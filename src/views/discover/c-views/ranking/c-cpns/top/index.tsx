import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { TopWrapper } from "./style"
import { AppShallowEqual, useAppSelector } from "@/store"
import { getFormatDate, setGetImgSize } from "@/utils/format"
import SectionButtons from "@/components/section-buttons"

interface IProps {
  children?: ReactNode
}

const Top: FC<IProps> = () => {
  const { rankingDetail } = useAppSelector(
    (state) => ({
      rankingDetail: state.ranking.rankingDetail,
    }),
    AppShallowEqual,
  )
  return (
    <TopWrapper>
      {Object.keys(rankingDetail).length > 0 && (
        <>
          <div className="img">
            <img src={setGetImgSize(rankingDetail.coverImgUrl, 150)} alt="" />
            <div className="sprite_cover cover"></div>
          </div>
          <div className="info">
            <h2 className="name">{rankingDetail.name}</h2>
            <div className="update-time">
              <i className="sprite_icon_02 icon" />
              <span>最近更新: {getFormatDate(rankingDetail.trackNumberUpdateTime)}</span>
            </div>
            <div className="control">
              <SectionButtons
                playlistInfo={{
                  subscribedCount: `(${rankingDetail.subscribedCount})`,
                  shareCount: `(${rankingDetail.shareCount})`,
                  commentCount: `(${rankingDetail.commentCount})`,
                }}
              />
            </div>
          </div>
        </>
      )}
    </TopWrapper>
  )
}

export default memo(Top)
