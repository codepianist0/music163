import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { RecommendWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
  recommendInfo: any
}

const SeactionRecommend: FC<IProps> = (props) => {
  const { recommendInfo } = props

  return (
    <RecommendWrapper>
      <div className="left">
        <img src={setGetImgSize(recommendInfo.coverImgUrl, 50)} alt="" />
      </div>
      <div className="right">
        <div className="name">{recommendInfo.name}</div>
        <div className="author">
          <span className="by">by</span>
          <div className="creator">{recommendInfo.creator.nickname}</div>
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(SeactionRecommend)
