import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { NewRadioWrapper } from "./style"
import SeactionHeaderV3 from "@/components/seaction-header-v3"
import { AppShallowEqual, useAppSelector } from "@/store"
import NewDjradioItem from "../djradio-item-new"

interface IProps {
  children?: ReactNode
}

const NewRadio: FC<IProps> = () => {
  const { categoryNewDjradio } = useAppSelector(
    (state) => ({
      categoryNewDjradio: state.djradio.categoryNewDjradio,
    }),
    AppShallowEqual,
  )
  return (
    <NewRadioWrapper>
      <SeactionHeaderV3 title="优秀新电台" />
      <div className="list">
        {categoryNewDjradio.slice(0, 5).map((item) => (
          <div className="new-item" key={item.id}>
            <NewDjradioItem info={item} />
          </div>
        ))}
      </div>
    </NewRadioWrapper>
  )
}

export default memo(NewRadio)
