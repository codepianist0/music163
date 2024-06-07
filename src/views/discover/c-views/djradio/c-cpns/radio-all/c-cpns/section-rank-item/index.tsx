import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ItemWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"
import { Progress } from "antd"

interface IProps {
  children?: ReactNode
  info: any
  index: number
}

const RankItem: FC<IProps> = (props) => {
  const { info, index } = props
  return (
    <ItemWrapper>
      <div className="ranking">
        <div className="index">{String(index + 1).padStart(2, "0")}</div>
      </div>
      <div className="img">
        <img src={setGetImgSize(info.program.coverUrl, 40)} alt="" />
        <div className="sprite_icon cover"></div>
      </div>
      <div className="info">
        <div className="name">{info.program?.name}</div>
        <div className="author">{info.program?.dj?.brand}</div>
      </div>
      <div className="progress">
        <Progress percent={90} showInfo={false} />
      </div>
    </ItemWrapper>
  )
}

export default memo(RankItem)
