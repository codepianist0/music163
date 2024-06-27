import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { BarWrappert } from "./style"
import classNames from "classnames"

interface IProps {
  children?: ReactNode
  barArray: any
  tabIndex: number
  changeIndexHandle: (index: number) => void
}

const SeactionBar: FC<IProps> = (props) => {
  const { barArray, tabIndex, changeIndexHandle } = props
  function tabClickHandle(index: number) {
    changeIndexHandle(index)
  }
  return (
    <BarWrappert>
      <div className="sprite_tab content">
        {barArray.map((item: string, index: number) => (
          <div
            className={classNames("sprite_tab item", { active: tabIndex === index })}
            key={item}
            onClick={() => tabClickHandle(index)}
          >
            <span className="sprite_tab right">{item}</span>
          </div>
        ))}
      </div>
    </BarWrappert>
  )
}

export default memo(SeactionBar)
