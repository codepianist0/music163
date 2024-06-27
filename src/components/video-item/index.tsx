import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { VideoWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
  info: any
}

const Video: FC<IProps> = (props) => {
  const { info } = props
  return (
    <VideoWrapper>
      <div className="img">
        <div className="sprite_cover cover">
          <i className="sprite_icon play" />
        </div>
        <img src={setGetImgSize(info.imgurl16v9, 137, 103)} alt="" />
      </div>
      <div className="i-name">{info.name}</div>
    </VideoWrapper>
  )
}

export default memo(Video)
