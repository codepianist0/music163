import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ListItemWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
  listInfo: any
}

const ListItem: FC<IProps> = (props) => {
  const { listInfo } = props
  return (
    <ListItemWrapper>
      <div className="top">
        <div className="left">
          <img src={setGetImgSize(listInfo.coverImgUrl, 80)} alt="" />
          <div className="sprite_cover cover"></div>
        </div>
        <div className="right">
          <div className="name">{listInfo.name}</div>
          <div className="control">
            <i className="sprite_02 icon paly"></i>
            <i className="sprite_02 icon favor"></i>
          </div>
        </div>
      </div>
      <ul className="list">
        {listInfo.tracks.slice(0, 10).map((item: any, index: any) => (
          <li className="item" key={item.id}>
            <div className="index">{index + 1}</div>
            <div className="name">{item.name}</div>
            <div className="icon-list">
              <i className="sprite_02 icon play"></i>
              <i className="sprite_icon_02 icon add"></i>
              <i className="sprite_02 icon favor"></i>
            </div>
          </li>
        ))}
        <li className="item more">查看全部 &gt;</li>
      </ul>
    </ListItemWrapper>
  )
}

export default memo(ListItem)