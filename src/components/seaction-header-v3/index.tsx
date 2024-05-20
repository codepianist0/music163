import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { HeaderWrapper } from "./style"

interface IProps {
  children?: ReactNode
  title?: string
  subTitle?: string
  playCounter?: number
  isLink?: boolean
}

const SeactionHeader: FC<IProps> = (props) => {
  const { title = "默认标题", subTitle, isLink = false, playCounter = -1 } = props
  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="counter">{subTitle}</div>
      </div>
      <div className="right">
        {isLink && (
          <div className="create_link">
            <i className="sprite_icon_02 icon" />
            生成外链播放器
          </div>
        )}

        {playCounter !== -1 && (
          <div className="paly-counter">
            播放: <span>{playCounter}</span>次
          </div>
        )}
      </div>
    </HeaderWrapper>
  )
}

export default memo(SeactionHeader)
