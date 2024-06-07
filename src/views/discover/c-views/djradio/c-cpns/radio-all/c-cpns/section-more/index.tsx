import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { MoreWrapper } from "./style"
import SeactionHeaderV3 from "@/components/seaction-header-v3"
import { SubTitle } from "../title"
import SeactionItem from "../seaction-item"

interface IProps {
  children?: ReactNode
  title: string
  seactionInfo: any
}

const Music: FC<IProps> = (props) => {
  const { title, seactionInfo } = props
  return (
    <MoreWrapper>
      <SeactionHeaderV3 title={title} isMore={true} SubTitle={SubTitle} />
      <div className="list">
        {seactionInfo.slice(0, 4).map((item: any) => (
          <div key={item.id} className="item">
            <SeactionItem info={item} />
          </div>
        ))}
      </div>
    </MoreWrapper>
  )
}

export default memo(Music)
