import React, { memo, useEffect, useState } from "react"
import type { FC, ReactNode } from "react"
import { HeaderWrapper } from "./style"
import CategoriesBox from "../categories-box"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { changeFilterInfoAction, changeIsShowCateAction, fetchPlaylistInfo } from "../../store"
import { useNavigate } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {
  const bodyEl = document.querySelector("body")
  const navicate = useNavigate()
  const [isFristClick, setIsFristClick] = useState(true)
  const { filterInfo, isShowCate, title } = useAppSelector(
    (state) => ({
      filterInfo: state.discoverPlaylist.filterInfo,
      isShowCate: state.discoverPlaylist.isShowCate,
      title: state.discoverPlaylist.title,
    }),
    AppShallowEqual,
  )
  const dispatch = useAppDispatch()

  function showCateHandle(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation()
    dispatch(changeIsShowCateAction(!isShowCate))
  }
  // 热门
  function searchHotHanlde(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation()
    if (!isFristClick) {
      return
    }
    setIsFristClick(false)
    dispatch(changeFilterInfoAction({ ...filterInfo, order: "hot" }))
    navicate("?order=hot")
    dispatch(fetchPlaylistInfo({ ...filterInfo, order: "hot" }))
  }

  useEffect(() => {
    function bodyClick() {
      dispatch(changeIsShowCateAction(false))
    }
    bodyEl?.addEventListener("click", bodyClick)
    return () => {
      bodyEl?.removeEventListener("click", bodyClick)
    }
  }, [])

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="sprite_buttom categories" onClick={(e) => showCateHandle(e)}>
          <span className="sprite_buttom text">
            选择分类
            <i className="sprite_icon_02 icon" />
          </span>
        </div>
      </div>
      <div className="right">
        <div className="sprite_buttom_02 hot" onClick={(e) => searchHotHanlde(e)}>
          热门
        </div>
      </div>
      <CategoriesBox />
    </HeaderWrapper>
  )
}

export default memo(Header)
