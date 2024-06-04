import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { SimiWrapper } from "./style"
import { AppShallowEqual, useAppSelector } from "@/store"
import SeactionHeaderV2 from "@/components/seaction-header-v2"
import SimiItemV1 from "@/components/simi-item-v1"

interface IProps {
  children?: ReactNode
}

const Simi: FC<IProps> = () => {
  const { simi } = useAppSelector(
    (state) => ({
      simi: state.song.simi,
    }),
    AppShallowEqual,
  )
  return (
    <SimiWrapper>
      <SeactionHeaderV2 title="相似歌曲" />
      <div className="simi-list">
        <div className="item">
          {simi.map((item) => (
            <SimiItemV1 key={item.id} songInfo={item} />
          ))}
        </div>
      </div>
    </SimiWrapper>
  )
}

export default memo(Simi)
