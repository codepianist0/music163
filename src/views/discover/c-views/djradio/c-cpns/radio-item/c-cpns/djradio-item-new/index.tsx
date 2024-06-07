import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { DjradioItemWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
  info: any
}

const NewDjradioItem: FC<IProps> = (props) => {
  const { info } = props
  return (
    <DjradioItemWrapper>
      <div className="img">
        <img src={setGetImgSize(info.picUrl, 150)} alt="" />
      </div>
      <div className="info">
        <div className="name">{info.name}</div>
        <div className="desc">{info.rcmdtext}</div>
      </div>
    </DjradioItemWrapper>
  )
}

export default memo(NewDjradioItem)
