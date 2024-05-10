import React, { memo } from "react"
import type { FC, ReactNode } from "react"

import { RecommendWrapper } from "./style"

import TopBanner from "./c-cpns/top-banner"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return (
    <RecommendWrapper>
      <TopBanner />
    </RecommendWrapper>
  )
}

export default memo(Recommend)
