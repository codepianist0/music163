import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ItemWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
  info: any
}

const RecommendItem: FC<IProps> = (props) => {
  const { info } = props
  return (
    <ItemWrapper>
      <div className="img">
        <img src={setGetImgSize(info.coverUrl, 40)} alt="" />
        <div className="sprite_icon cover"></div>
      </div>
      <div className="info">
        <div className="name">{info.name}</div>
        <div className="author">{info.dj?.brand}</div>
      </div>
      <div className="button">音乐播客</div>
    </ItemWrapper>
  )
}

export default memo(RecommendItem)
