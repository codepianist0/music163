import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ContainWrapper } from "./style"
import SeactionHeaderV2 from "@/components/seaction-header-v2"

interface IProps {
  children?: ReactNode
}

const Contain: FC<IProps> = () => {
  return (
    <ContainWrapper>
      <SeactionHeaderV2 title="包含这首歌的歌单" />
    </ContainWrapper>
  )
}

export default memo(Contain)
