import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { MenuItemWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
  albumInfo: any
}

const MenuItem: FC<IProps> = (props) => {
  const { albumInfo } = props

  function playClickHandle(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    event.stopPropagation()
    console.log("播放")
  }

  function albumClickHandle() {
    console.log("点击了专辑")
  }

  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={setGetImgSize(albumInfo.coverUrl, 100)} alt="" />
        <div className="sprite_cover cover" onClick={albumClickHandle}>
          <i className="sprite_icon play-icon" onClick={(e) => playClickHandle(e)}></i>
        </div>
      </div>
      <div className="bottom">
        <div>
          <span className="name">{albumInfo.albumName}</span>
        </div>
        <div>
          <span className="author">{albumInfo.artistName}</span>
        </div>
      </div>
    </MenuItemWrapper>
  )
}

export default memo(MenuItem)
