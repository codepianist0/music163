import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { HotAnchorWrapper } from "./style"
import Header from "@/components/seaction-header-v2"

import { hotRadios } from "@/assets/data/local_data"

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return (
    <HotAnchorWrapper>
      <Header title="热门主播" />
      <div className="anthor-list">
        {hotRadios.map((item) => (
          <div className="item" key={item.name}>
            <div className="left">
              <img src={item.picUrl} alt="" />
            </div>
            <div className="right">
              <div className="name">{item.name}</div>
              <div className="desc">{item.position}</div>
            </div>
          </div>
        ))}
      </div>
    </HotAnchorWrapper>
  )
}

export default memo(HotAnchor)
