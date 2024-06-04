import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { SimiItemWrapper } from "./style"

interface IProps {
  children?: ReactNode
  songInfo: any
}

const SimiItem: FC<IProps> = (props) => {
  const { songInfo } = props
  return (
    <SimiItemWrapper>
      <div className="left">
        <div className="name">{songInfo.name}</div>
        <div className="author">
          {songInfo.artists?.map((item: any) => <span key={item.id}>{item.name}</span>)}
        </div>
      </div>
      <div className="right">
        <i className="sprite_icon_03 icon play"></i>
        <i className="sprite_icon_03 icon push"></i>
      </div>
    </SimiItemWrapper>
  )
}

export default memo(SimiItem)
