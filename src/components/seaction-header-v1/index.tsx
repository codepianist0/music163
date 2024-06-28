import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { HeaderWrapper } from "./style"

interface IProps {
  children?: ReactNode
  title?: string
  tabs?: string[]
  moreText?: string
  SubTitle?: JSX.Element
  moreClick?: () => void
}

const SeactionHeader: FC<IProps> = (props) => {
  const { title = "默认标题", moreText = "更多", SubTitle, moreClick } = props
  function moreClickHandle() {
    moreClick && moreClick()
  }
  return (
    <HeaderWrapper>
      <div className="left">
        <i className="sprite_02 icon"></i>
        <h3 className="title" onClick={moreClickHandle}>
          {title}
        </h3>
        {SubTitle}
      </div>
      <div className="right">
        <div className="more">
          <span onClick={moreClickHandle}>{moreText}</span>
          <i className="sprite_02 icon"></i>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default memo(SeactionHeader)
