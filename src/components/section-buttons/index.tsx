import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ButtonWrapper } from "./style"

interface IProps {
  children?: ReactNode
  playlistInfo: {
    subscribedCount: number | string
    shareCount: number | string
    commentCount: number | string
  }
}

const SectionButton: FC<IProps> = (props) => {
  const { playlistInfo } = props
  return (
    <ButtonWrapper>
      <div className="list-control">
        <div className="add">
          <div className="sprite_buttom play">
            <i className="sprite_buttom icon" />
            <span>播放</span>
          </div>
          <div className="sprite_buttom push"></div>
        </div>
        <div className="sprite_buttom p-left favor">
          <span className="sprite_buttom">{playlistInfo.subscribedCount}</span>
        </div>
        <div className="sprite_buttom p-left share">
          <span className="sprite_buttom">{playlistInfo.shareCount}</span>
        </div>
        <div className="sprite_buttom p-left download">
          <span className="sprite_buttom">下载</span>
        </div>
        <div className="sprite_buttom p-left comments">
          <span className="sprite_buttom">{playlistInfo.commentCount}</span>
        </div>
      </div>
    </ButtonWrapper>
  )
}

export default memo(SectionButton)
