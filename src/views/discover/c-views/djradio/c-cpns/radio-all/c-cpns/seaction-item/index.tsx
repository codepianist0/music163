import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ItemWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
  info: any
}

const SeactionItem: FC<IProps> = (props) => {
  const { info } = props
  return (
    <ItemWrapper>
      <div className="img">
        <img src={setGetImgSize(info.picUrl, 120)} alt="" />
      </div>
      <div className="info">
        <div className="name">{info.name}</div>
        <div className="desc">{info.rcmdtext}</div>
      </div>
    </ItemWrapper>
  )
}

export default memo(SeactionItem)
