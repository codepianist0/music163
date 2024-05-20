import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { TableWrapper } from "./style"
import { AppShallowEqual, useAppSelector } from "@/store"
import { getFormatTime } from "@/utils/format"

interface IProps {
  children?: ReactNode
  limit?: number
}

const Table: FC<IProps> = (props) => {
  const { limit = 10 } = props
  const tHeaders = ["", "歌曲标题", "时长", "歌手", "专辑"]
  const { playlistInfo } = useAppSelector(
    (state) => ({
      playlistInfo: state.playlist.playlistInfo,
    }),
    AppShallowEqual,
  )
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {tHeaders.map((item) => (
              <th className="sprite_table" key={item}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {playlistInfo.tracks?.slice(0, limit).map((item: any, index: number) => (
            <tr key={item.id}>
              <td className="top">
                <div className="index">{index + 1}</div>
                <div className="sprite_table play"></div>
              </td>
              <td className="name">
                <div>{item.name}</div>
              </td>
              <td className="time">{getFormatTime(item.dt)}</td>
              <td className="control">
                <i className="sprite_icon_02 icon add" />
                <i className="sprite_table icon favor" />
                <i className="sprite_table icon share" />
                <i className="sprite_table icon download" />
              </td>
              <td className="singer">
                {item.ar?.map((artItem: any) => <span key={artItem.id}>{artItem.name}</span>)}
              </td>
              <td className="album">{item.al?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  )
}

export default memo(Table)
