import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { MenuItemWrapper } from "./style"
import { getFormatCouter, setGetImgSize } from "@/utils/format"
import { useAppDispatch } from "@/store"
import { fetchSongMenuAction } from "@/views/player/store"
import { useNavigate } from "react-router-dom"

interface IProps {
  children?: ReactNode
  menuInfo?: any
}

const SingerMenuItem: FC<IProps> = (props) => {
  const { menuInfo } = props
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  // 点击歌单播放
  function playClickHandle(event: React.MouseEvent<HTMLElement, MouseEvent>, menuInfo: any) {
    event.stopPropagation()
    dispatch(fetchSongMenuAction(menuInfo.id))
  }
  // 进入歌单
  function menuClickHandle(info: any) {
    navigate(`/playlist?id=${info.id}`)
  }

  return (
    <MenuItemWrapper>
      <div className="top">
        <img
          src={setGetImgSize(menuInfo.picUrl ?? menuInfo.coverImgUrl, 140)}
          alt={menuInfo.name}
        />
        <a className="sprite_cover cover" onClick={() => menuClickHandle(menuInfo)}>
          <div className="sprite_cover info">
            <div className="left">
              <i className="sprite_icon icon"></i>
              <span>{getFormatCouter(menuInfo.playCount)}</span>
            </div>
            <div className="right">
              <i className="sprite_icon icon" onClick={(e) => playClickHandle(e, menuInfo)}></i>
            </div>
          </div>
        </a>
      </div>
      <div className="bottom">
        <span>{menuInfo.name}</span>
      </div>
    </MenuItemWrapper>
  )
}

export default memo(SingerMenuItem)
