import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { TableWrapper } from "./style"
import { getFormatTime, setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
  limit?: number
  playlistInfo: any
}

const Table: FC<IProps> = (props) => {
  const { limit = 10, playlistInfo } = props
  const tHeaders = ["", "标题", "时长", "歌手"]

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
                <div className="sprite_icon_02 new"></div>
              </td>
              <td className="name">
                {index < 3 && <img src={setGetImgSize(item.al?.picUrl, 50)} alt="" />}
                <i className="sprite_table play" />
                <div className="text">
                  <span className="n-name">{item.name}</span>
                  {item.tns?.map((tnsItem: string) => (
                    <span className="tns" key={tnsItem}>
                      {`-(${tnsItem})`}
                    </span>
                  ))}
                </div>
              </td>
              <td className="time">{getFormatTime(item.dt)}</td>
              <td className="control">
                <div className="list">
                  <i className="sprite_icon_02 icon add" />
                  <i className="sprite_table icon favor" />
                  <i className="sprite_table icon share" />
                  <i className="sprite_table icon download" />
                </div>
              </td>
              <td className="singer">
                <div className="singer-list">
                  {item.ar?.map((artItem: any, arIndex: number) => (
                    <span key={artItem.id}>
                      <span className="author">{artItem.name}</span>
                      {arIndex !== item.ar?.length - 1 && <span>/</span>}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  )
}

export default memo(Table)
