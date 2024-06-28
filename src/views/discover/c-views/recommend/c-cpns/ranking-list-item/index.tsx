import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ListItemWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"
import { useNavigate } from "react-router-dom"
import { yugeEvent } from "@/utils/event-bus"
import { useAppDispatch } from "@/store"
import { fetchSongMenuAction } from "@/views/player/store"

interface IProps {
  children?: ReactNode
  listInfo: any
}

const ListItem: FC<IProps> = (props) => {
  const { listInfo } = props
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  // 播放歌单
  function playMenuListClick(listInfo: any) {
    dispatch(fetchSongMenuAction(listInfo.id))
    yugeEvent.emit("changePlay", true)
  }

  // 跳转音乐页面
  function toSongClick(index: number) {
    navigate(`/song?id=${listInfo.tracks?.[index]?.id}`)
  }
  // 音乐播放
  function musicPlayHandle(info: any) {
    yugeEvent.emit("palyMusicById", info)
  }

  // 将音乐添加到歌单中
  function musicPushHandle(info: any) {
    yugeEvent.emit("pushMusicToMenu", info)
  }
  // 跳转到榜单
  function toRankingHandle() {
    navigate(`/discover/ranking?id=${listInfo.id}`)
  }
  return (
    <ListItemWrapper>
      <div className="top">
        <div className="left">
          <img src={setGetImgSize(listInfo.coverImgUrl, 80)} alt="" />
          <div className="sprite_cover cover" onClick={() => toRankingHandle()}></div>
        </div>
        <div className="right">
          <div className="name">{listInfo.name}</div>
          <div className="control">
            <i className="sprite_02 icon paly" onClick={() => playMenuListClick(listInfo)} />
            <i className="sprite_02 icon favor" />
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
              <i className="sprite_02 icon play" onClick={() => musicPlayHandle(item)} />
              <i className="sprite_icon_02 icon add" onClick={() => musicPushHandle(item)} />
              <i className="sprite_02 icon favor" />
            </div>
          </li>
        ))}
        <li className="item more" onClick={() => toRankingHandle()}>
          查看全部 &gt;
        </li>
      </ul>
    </ListItemWrapper>
  )
}

export default memo(ListItem)
