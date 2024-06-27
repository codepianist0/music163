import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ItemWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
  info: any
}

const AlbumItem: FC<IProps> = (props) => {
  const { info } = props
  return (
    <ItemWrapper>
      <div className="img">
        <div className="sprite_cover cover">
          <i className="sprite_icon play" />
        </div>
        <img src={setGetImgSize(info.picUrl, 130)} alt="" />
      </div>
      <div className="name">{info.name}</div>
      <div className="author">{props.info.artist.name}</div>
    </ItemWrapper>
  )
}

export default memo(AlbumItem)
