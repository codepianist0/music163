import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { HeaderWrapper } from "./style"

interface IProps {
  children?: ReactNode
  title?: string
  tabs?: string[]
  moreText?: string
}

const SeactionHeader: FC<IProps> = (props) => {
  const { title = "默认标题", tabs = [], moreText = "更多" } = props

  return (
    <HeaderWrapper>
      <div className="left">
        <i className="sprite_02 icon"></i>
        <h3 className="title">{title}</h3>
        <div className="tab-list">
          {tabs.map((item) => (
            <div className="tab-item" key={item}>
              <span className="text">{item}</span>
              <span className="slice">|</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="more">
          <span>{moreText}</span>
          <i className="sprite_02 icon"></i>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default memo(SeactionHeader)
