import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { MenuItemWrapper } from "./style"
import SongMenuItemTop from "../song-menu-item-top"
import { useNavigate } from "react-router-dom"

interface IProps {
  children?: ReactNode
  info: any
}

const SongMenuItemV4: FC<IProps> = (props) => {
  const { info } = props
  const navicate = useNavigate()

  return (
    <MenuItemWrapper>
      <SongMenuItemTop menuInfo={info} />
      <div className="name" onClick={() => navicate(`/playlist?id=${info.id}`)}>
        {info.name}
      </div>
      <div className="author">
        <span className="by">by</span>
        <span className="nickname">{info.creator.nickname}</span>
        {info.creator?.avatarDetail?.identityIconUrl && (
          <img className="icon" src={info.creator?.avatarDetail?.identityIconUrl} alt="" />
        )}
      </div>
    </MenuItemWrapper>
  )
}

export default memo(SongMenuItemV4)
