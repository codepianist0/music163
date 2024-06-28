import React, { memo, useState } from "react"
import type { FC, ReactNode } from "react"
import { BoxWrapper } from "./style"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import {
  changeIsShowCateAction,
  changeTagsInfoAction,
  changeTitleAction,
  fetchPlaylistInfo,
} from "../../store"
import classNames from "classnames"
import { useNavigate } from "react-router-dom"

const bgPosition = ["-20px -735px", "0 -60px", "0 -88px", "0 -117px", "0 -141px"]

interface IProps {
  children?: ReactNode
}

const CategoriesBox: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { tagsInfo, filterInfo, isShowCate } = useAppSelector(
    (state) => ({
      tagsInfo: state.discoverPlaylist.tagsInfo,
      filterInfo: state.discoverPlaylist.filterInfo,
      isShowCate: state.discoverPlaylist.isShowCate,
    }),
    AppShallowEqual,
  )
  const types = Object.keys(tagsInfo)

  const [currentActive, setCurrentActive] = useState({
    name: "",
    subName: "",
  })

  function BoxClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation()
  }

  function subItemClick(name: string, subName: string) {
    // 1.1. 获取前一个active的信息
    const preActive = currentActive
    // 1.2 保存当前active的信息
    setCurrentActive({ name, subName })
    // 2. 深拷贝
    const _tagInfo = JSON.parse(JSON.stringify(tagsInfo))

    // 3.1 删除旧的active
    if (preActive.name.length > 0) {
      const preIndex = _tagInfo[preActive.name].findIndex(
        (item: any) => item.name === preActive.subName,
      )
      _tagInfo[preActive.name][preIndex].activity = false
    }
    // 3.2 增加新的active
    if (name !== "" && subName !== "") {
      const index = _tagInfo[name].findIndex((item: any) => item.name === subName)
      _tagInfo[name][index].activity = true
    }

    dispatch(changeTagsInfoAction(_tagInfo))
    dispatch(fetchPlaylistInfo({ ...filterInfo, cat: subName }))
    dispatch(changeTitleAction(subName ? subName : "全部"))
    dispatch(changeIsShowCateAction(false))
    navigate(`/discover/playlists?cat=${subName || "all"}`)
  }

  return (
    <BoxWrapper
      onClick={(e) => BoxClick(e)}
      style={{ visibility: isShowCate ? "visible" : "hidden" }}
    >
      <div className="sprite_tags top">
        <i className="sprite_icon icon"></i>
      </div>
      <div className="sprite_tags content">
        <div className="all">
          <button className="sprite_buttom_02 btn" onClick={() => subItemClick("", "")}>
            全部风格
          </button>
        </div>
        <div className="sub">
          {types.map((item, index) => (
            <div className="item" key={item}>
              <div className="left">
                <i
                  className="sprite_icon_02 icon"
                  style={{ backgroundPosition: bgPosition[index] }}
                />
                <div className="text">{item}</div>
              </div>
              <div className="right">
                {tagsInfo[item].map((subItem: any, subIndex: number) => (
                  <span className="sub-item" key={subItem.name}>
                    <span
                      className={classNames("name", {
                        active: subItem.activity,
                      })}
                      onClick={() => subItemClick(item, subItem.name)}
                    >
                      {subItem.name}
                    </span>
                    {subIndex !== tagsInfo[item].length - 1 && <span className="slice">|</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sprite_tags bottom"></div>
    </BoxWrapper>
  )
}

export default memo(CategoriesBox)
