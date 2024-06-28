import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { MenuItemWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"
import { useNavigate } from "react-router-dom"

interface IProps {
  children?: ReactNode
  albumInfo: any
}

const MenuItem: FC<IProps> = (props) => {
  const { albumInfo } = props
  const navigate = useNavigate()

  function playClickHandle(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    event.stopPropagation()
    console.log("播放")
  }

  function albumClickHandle() {
    navigate(`/album?id=${albumInfo.id}`)
  }
  function singerClickHandle() {
    navigate(`/singer?id=${albumInfo.artist.id}`)
  }

  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={setGetImgSize(albumInfo.picUrl, 100)} alt="" />
        <div className="sprite_cover cover" onClick={albumClickHandle}>
          <i className="sprite_icon play-icon" onClick={(e) => playClickHandle(e)}></i>
        </div>
      </div>
      <div className="bottom">
        <div>
          <span className="name" onClick={albumClickHandle}>
            {albumInfo.name}
          </span>
        </div>
        <div>
          <span className="author" onClick={singerClickHandle}>
            {albumInfo.artist.name}
          </span>
        </div>
      </div>
    </MenuItemWrapper>
  )
}

export default memo(MenuItem)
