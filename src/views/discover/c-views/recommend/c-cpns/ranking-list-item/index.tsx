import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ListItemWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"
import { useNavigate } from "react-router-dom"

interface IProps {
  children?: ReactNode
  listInfo: any
}

const ListItem: FC<IProps> = (props) => {
  const { listInfo } = props
  const navigate = useNavigate()
  function toSongClick(index: number) {
    console.log(index)

    navigate(`/song?id=${listInfo.tracks?.[index]?.id}`)
  }
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
            <div className="name" onClick={() => toSongClick(index)}>
              {item.name}
            </div>
            <div className="icon-list">
              <i className="sprite_02 icon play" />
              <i className="sprite_icon_02 icon add" />
              <i className="sprite_02 icon favor" />
            </div>
          </li>
        ))}
        <li className="item more">查看全部 &gt;</li>
      </ul>
    </ListItemWrapper>
  )
}

export default memo(ListItem)
