import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { CategoriesWrapper } from "./style"
import { artistCategories } from "@/assets/data/local_data"
import { useNavigate } from "react-router-dom"
import classNames from "classnames"
import { useGetSearchParams } from "@/hooks/useGetSearchParams"
import { useAppDispatch } from "@/store"
import { changeShiftInfoAction, changetitleAction, fetchSingerInfoAction } from "../../store"

interface IProps {
  children?: ReactNode
}

const Template: FC<IProps> = () => {
  const navigator = useNavigate()
  const dispatch = useAppDispatch()
  const { id, cat } = useGetSearchParams()
  // 点击分类
  function cateClickHandle(item: any, subItem: any) {
    navigator(subItem.url)
    const area = item.area
    const regex = /[?&](cat|id)=([^&]*)/
    const match = subItem.url.match(regex)
    const id = match?.[2]
    const type = subItem.type
    dispatch(changeShiftInfoAction({ area, id: Number(id), type }))
    if (id) {
      dispatch(fetchSingerInfoAction({ area, id, type }))
    } else {
      dispatch(fetchSingerInfoAction({ area, type }))
    }
    dispatch(changetitleAction(subItem.name))
  }
  // 匹配avtive分类
  function getCatValue(url: string): boolean {
    const regex = /[?&](cat|id)=([^&]*)/
    const match = url.match(regex)
    if (match) {
      if (match[2] === id || match[2] === cat) {
        return true
      }
    }
    if (url === "/discover/singer" && !id && !cat) {
      return true
    }
    return false
  }
  return (
    <CategoriesWrapper>
      {artistCategories.map((item) => (
        <div className="item" key={item.area}>
          <h3 className="title">{item.title}</h3>
          {item.artists.map((subItem) => (
            <div
              className={classNames("sub-title sprite_singer_bg", {
                active: getCatValue(subItem.url),
              })}
              key={subItem.type}
              onClick={() => cateClickHandle(item, subItem)}
            >
              {subItem.name}
            </div>
          ))}
        </div>
      ))}
    </CategoriesWrapper>
  )
}

export default memo(Template)
