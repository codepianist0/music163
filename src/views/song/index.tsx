import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { SongWrapper } from "./style"

interface IProps {
  children?: ReactNode
}

const Song: FC<IProps> = () => {
  return <SongWrapper>Song</SongWrapper>
}

export default memo(Song)
