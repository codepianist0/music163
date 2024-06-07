import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { RankItemWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
  info: any
}

const RankItem: FC<IProps> = (props) => {
  const { info } = props
  return (
    <RankItemWrapper>
      <div className="img">
        <img src={setGetImgSize(info.picUrl, 120)} alt="" />
      </div>
      <div className="info">
        <div className="name">{info.name}</div>
        <div className="author">
          <i className="sprite_icon_02 user" />
          <div className="text">{info.dj?.nickname}</div>
          <img
            className="level"
            src={setGetImgSize(info.dj?.avatarDetail?.identityIconUrl, 13)}
            alt=""
          />
        </div>
        <div className="order">
          <div className="issues">共{info.programCount}期</div>
          <div className="subscribe">订阅{info.subCount}次</div>
        </div>
      </div>
    </RankItemWrapper>
  )
}

export default memo(RankItem)
