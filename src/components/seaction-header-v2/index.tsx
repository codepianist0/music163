import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { HeaderV2Wrapper } from "./style"

interface IProps {
  children?: ReactNode
  title?: string
  haveMore?: boolean
}

const HeaderV2: FC<IProps> = (props) => {
  const { title = "默认标题", haveMore = false } = props
  return (
    <HeaderV2Wrapper>
      <div className="title">{title}</div>
      {haveMore && (
        <div className="more">
          <span>查看全部 &gt;</span>
        </div>
      )}
    </HeaderV2Wrapper>
  )
}

export default memo(HeaderV2)
