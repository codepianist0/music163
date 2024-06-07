import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { RadioItemWrapper } from "./style"
import NewRadio from "./c-cpns/new-radio"
import RadioRank from "./c-cpns/radio-rank"

interface IProps {
  children?: ReactNode
}

const RadioItem: FC<IProps> = () => {
  return (
    <RadioItemWrapper>
      <NewRadio />
      <RadioRank />
    </RadioItemWrapper>
  )
}

export default memo(RadioItem)
