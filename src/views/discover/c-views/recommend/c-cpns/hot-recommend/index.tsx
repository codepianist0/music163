import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { HotWrapper } from "./style"
import SeactionHeader from "@/components/seaction-header-v1"
import { AppShallowEqual, useAppSelector } from "@/store"
import SingerMenuItem from "@/components/song-menu-item-v1"
import SubTitle from "../sub-title"
import { useNavigate } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const navigete = useNavigate()
  const { hotRecommend } = useAppSelector(
    (state) => ({
      hotRecommend: state.recommend.hotRecommend,
    }),
    AppShallowEqual,
  )
  function moreClick() {
    navigete(`/discover/playlists?cat=全部`)
  }

  return (
    <HotWrapper>
      <SeactionHeader title="热门推荐" SubTitle={<SubTitle />} moreClick={() => moreClick()} />
      <div className="content">
        {hotRecommend.map((item) => (
          <SingerMenuItem key={item.id} menuInfo={item} />
        ))}
      </div>
    </HotWrapper>
  )
}

export default memo(HotRecommend)
