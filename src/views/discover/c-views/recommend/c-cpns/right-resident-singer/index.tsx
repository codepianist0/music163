import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ResidentSingerWrapper } from "./style"

import Header from "@/components/seaction-header-v2"
import { AppShallowEqual, useAppSelector } from "@/store"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
}

const ResidentSinger: FC<IProps> = () => {
  const { residentSinger } = useAppSelector(
    (state) => ({ residentSinger: state.recommend.residentSinger }),
    AppShallowEqual,
  )

  return (
    <ResidentSingerWrapper>
      <Header title="入驻歌手" haveMore={true} />
      <div className="singer-list">
        {residentSinger.slice(0, 5).map((item) => (
          <div className="item" key={item.id}>
            <div className="left">
              <img src={setGetImgSize(item.img1v1Url, 62)} alt="" />
            </div>
            <div className="right">
              <div className="name">{item.name}</div>
              <div className="desc">{item.alias}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="sprite_buttom add">申请成为网易音乐人</div>
    </ResidentSingerWrapper>
  )
}

export default memo(ResidentSinger)
