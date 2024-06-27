import { getFormatDate, setGetImgSize } from "@/utils/format"
import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { AlbumWrapper } from "./style"

interface IProps {
  children?: ReactNode
  info: any
}

const AlbumItem: FC<IProps> = (props) => {
  const { info } = props
  return (
    <AlbumWrapper>
      <div className="img">
        <div className="sprite_cover cover" />
        <img src={setGetImgSize(info.picUrl, 120)} alt="" />
      </div>
      <div className="name">{info.name}</div>
      <div className="time">{getFormatDate(info.publishTime, "YYYY.MM.DD")}</div>
    </AlbumWrapper>
  )
}

export default memo(AlbumItem)
