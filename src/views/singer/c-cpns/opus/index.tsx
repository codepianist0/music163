import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { OpusWrapper } from "./style"
import { AppShallowEqual, useAppSelector } from "@/store"
import { getFormatTime } from "@/utils/format"

interface IProps {
  children?: ReactNode
}

const Opus: FC<IProps> = () => {
  const { hotSongs } = useAppSelector(
    (state) => ({
      hotSongs: state.hSinger.hotSongs,
    }),
    AppShallowEqual,
  )
  return (
    <OpusWrapper>
      <div className="top">
        <div className="left">
          <div className="list-control">
            <div className="add">
              <div className="sprite_buttom play">
                <i className="sprite_buttom icon" />
                <span>播放</span>
              </div>
              <div className="sprite_buttom push"></div>
            </div>
            <div className="sprite_buttom p-left favor">
              <span className="sprite_buttom">收藏热门50</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="select sprite_buttom">
            <span className="sprite_buttom">
              热门单曲 <i className="icon" />
            </span>
            <div className="select-list">
              <div className="item active">热门单曲</div>
              <div className="item">作词作品</div>
              <div className="item">作曲作品</div>
            </div>
          </div>
        </div>
      </div>
      <div className="table">
        <table>
          <tbody>
            {hotSongs.map((item, index) => (
              <tr key={item.id}>
                <td className="column frist">
                  <div className="index">{index + 1}</div>
                  <i className="sprite_table icon play" />
                </td>
                <td className="column second">
                  <p className="t-name">
                    <span className="main-name">{item.name}</span>
                    {item.alia[0] && <span className="sub-name">-{item.alia[0]}</span>}
                  </p>
                </td>
                <td className="column time">{getFormatTime(item.dt)}</td>
                <td className="control">
                  <i className="sprite_icon_02 icon add" />
                  <i className="sprite_table icon favor" />
                  <i className="sprite_table icon share" />
                  <i className="sprite_table icon download" />
                </td>
                <td className="column album">{item.al.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </OpusWrapper>
  )
}

export default memo(Opus)
