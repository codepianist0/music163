import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { SubscribeWrapper } from "./style"
import SeactionHeaderV2 from "@/components/seaction-header-v2"
import { useAppSelector } from "@/store"
import { shallowEqual } from "react-redux"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
}

const Subscribe: FC<IProps> = () => {
  const { subscribers } = useAppSelector(
    (state) => ({
      subscribers: state.playlist.subscribers,
    }),
    shallowEqual,
  )
  return (
    <SubscribeWrapper>
      <SeactionHeaderV2 title="喜欢这个歌单的人" />
      <div className="list">
        {subscribers.slice(0, 8).map((item) => (
          <div className="item" key={item.userId}>
            <img src={setGetImgSize(item.avatarUrl, 40)} alt="" />
          </div>
        ))}
      </div>
    </SubscribeWrapper>
  )
}

export default memo(Subscribe)
