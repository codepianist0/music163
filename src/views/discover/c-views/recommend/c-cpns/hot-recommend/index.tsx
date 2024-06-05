import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { HotWrapper } from "./style"
import SeactionHeader from "@/components/seaction-header-v1"
import { AppShallowEqual, useAppSelector } from "@/store"
import SingerMenuItem from "@/components/song-menu-item-v1"

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const tabs = ["华语", "流行", "摇滚", "民谣", "电子"]

  const { hotRecommend } = useAppSelector(
    (state) => ({
      hotRecommend: state.recommend.hotRecommend,
    }),
    AppShallowEqual,
  )

  return (
    <HotWrapper>
      <SeactionHeader title="热门推荐" tabs={tabs} />
      <div className="content">
        {hotRecommend.map((item) => (
          <SingerMenuItem key={item.id} menuInfo={item} />
        ))}
      </div>
    </HotWrapper>
  )
}

export default memo(HotRecommend)
