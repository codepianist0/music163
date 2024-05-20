import SeactionHeaderV2 from "@/components/seaction-header-v2"
import { RecommendWrapper } from "./style"
import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { AppShallowEqual, useAppSelector } from "@/store"
import SeactionRecommend from "@/components/seaction-recommend"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const { related } = useAppSelector(
    (state) => ({
      related: state.playlist.related,
    }),
    AppShallowEqual,
  )
  return (
    <RecommendWrapper>
      <SeactionHeaderV2 title="相关推荐" />
      <div className="recommend-list">
        {related.map((item) => (
          <SeactionRecommend key={item.id} recommendInfo={item} />
        ))}
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
