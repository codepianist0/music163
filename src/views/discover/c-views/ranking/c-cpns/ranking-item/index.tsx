import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ItemWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"
import classNames from "classnames"

interface IProps {
  children?: ReactNode
  info: any
  isActive: boolean
}

const RankingItem: FC<IProps> = (prop) => {
  const { info, isActive } = prop
  return (
    <ItemWrapper className={classNames({ active: isActive })}>
      <div className="img">
        <img src={setGetImgSize(info.coverImgUrl, 40)} alt="" />
      </div>
      <div className="info">
        <div className="name">{info.name}</div>
        <div className="update">{info.updateFrequency}</div>
      </div>
    </ItemWrapper>
  )
}

export default memo(RankingItem)
