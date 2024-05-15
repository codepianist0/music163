import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ScrollBarWrapper } from "./style"

interface IProps {
  children?: ReactNode
}

const ScrollBar: FC<IProps> = () => {
  return <ScrollBarWrapper>ScrollBar</ScrollBarWrapper>
}

export default memo(ScrollBar)
