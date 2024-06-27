import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ItemWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
  info: any
  subCount: number
}

const DJRadioItem: FC<IProps> = (props) => {
  const { info, subCount } = props
  return (
    <ItemWrapper>
      <div className="content" key={info.id}>
        <div className="img">
          <img src={setGetImgSize(info.picUrl, 50)} alt="" />
        </div>
        <div className="name">
          <span className="text">{info.name}</span>
          <i className="sprite_icon_03 share" />
        </div>
        <div className="subscribe">订阅{subCount}次</div>
        <div className="period">{info.programCount}期</div>
      </div>
    </ItemWrapper>
  )
}

export default memo(DJRadioItem)
