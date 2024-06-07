import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { HeaderWrapper } from "./style"

interface IProps {
  children?: ReactNode
  title?: string
  subTitle?: string
  playCounter?: number
  isLink?: boolean
  isMore?: boolean
  Title?: JSX.Element
  SubTitle?: JSX.Element
  Right?: JSX.Element
}

const SeactionHeader: FC<IProps> = (props) => {
  const {
    title = "默认标题",
    Title,
    subTitle,
    SubTitle,
    isLink = false,
    playCounter = -1,
    isMore,
    Right,
  } = props

  function titleClick() {
    console.log("title click", title)
  }

  function moreClick() {
    console.log("more click")
  }

  return (
    <HeaderWrapper>
      <div className="left">
        {typeof title === "string" && !Title && (
          <h3 className="title" onClick={titleClick}>
            {title}
          </h3>
        )}
        {Title}
        <div className="sub-title">{subTitle}</div>
        {SubTitle}
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
        {isMore && (
          <div className="more" onClick={moreClick}>
            更多&gt;
          </div>
        )}
        {Right}
      </div>
    </HeaderWrapper>
  )
}

export default memo(SeactionHeader)
