import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { HotArtistWrapper } from "./style"
import SeactionHeaderV2 from "@/components/seaction-header-v2"
import { AppShallowEqual, useAppSelector } from "@/store"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
}

const HotArtist: FC<IProps> = () => {
  const { hotArtist } = useAppSelector(
    (state) => ({
      hotArtist: state.hSinger.hotArtist,
    }),
    AppShallowEqual,
  )
  return (
    <HotArtistWrapper>
      <div className="title">
        <SeactionHeaderV2 title="热门歌手" />
      </div>
      <div className="artist-list">
        {hotArtist.map((item: any) => (
          <div className="item" key={item.id}>
            <div className="img">
              <img src={setGetImgSize(item.picUrl, 50)} alt="" />
            </div>
            <div className="name">{item.name}</div>
          </div>
        ))}
      </div>
    </HotArtistWrapper>
  )
}

export default memo(HotArtist)
