import React, { memo, useState } from "react"
import type { FC, ReactNode } from "react"
import { BarWrapper } from "./style"
import classNames from "classnames"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { fetchSingerInfoAction } from "../../store"

interface IProps {
  children?: ReactNode
}

function getAToZ() {
  return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
}

const CategoriesBar: FC<IProps> = () => {
  const alphabetArray = getAToZ()
  alphabetArray.push("其他")
  alphabetArray.unshift("热门")

  const dispatch = useAppDispatch()
  const [currentIndex, setCurrentIndex] = useState(0)
  const { area, id, type } = useAppSelector(
    (state) => ({
      area: state.singer.area,
      id: state.singer.id,
      type: state.singer.type,
    }),
    AppShallowEqual,
  )

  function shiftClickHandle(name: string, index: number) {
    setCurrentIndex(index)
    const initial = name.charCodeAt(0)
    switch (name) {
      case "热门":
        dispatch(fetchSingerInfoAction({ area, id, type, initial: -1 }))
        return
      case "其他":
        dispatch(fetchSingerInfoAction({ area, id, type, initial: 0 }))
        return
      default:
        dispatch(fetchSingerInfoAction({ area, id, type, initial }))
    }
  }
  return (
    <BarWrapper>
      {alphabetArray.map((item, index) => (
        <div
          className={classNames("item", { active: currentIndex === index })}
          key={item}
          onClick={() => shiftClickHandle(item, index)}
        >
          {item}
        </div>
      ))}
    </BarWrapper>
  )
}

export default memo(CategoriesBar)
