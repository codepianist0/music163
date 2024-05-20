import React, { memo, useEffect } from "react"
import type { FC, ReactNode } from "react"
import { ListWrapper } from "./style"
import { useSearchParams } from "react-router-dom"
import { fetchPlaylistAction } from "./store"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { LeftWrapper, RightWrapper } from "./style"

import SeactionHeader from "@/components/seaction-header-v3"
import Info from "./c-cpns/info"
import Table from "./c-cpns/table"
import Comments from "./c-cpns/comments"
import Subscribe from "./c-cpns/subscribe"
import Recommend from "./c-cpns/recommend"
import SeactionDownload from "@/components/seaction-download"

interface IProps {
  children?: ReactNode
}

const PlayList: FC<IProps> = () => {
  // 获取查询参数
  const [searchParams] = useSearchParams()
  const { id } = Object.fromEntries(searchParams)
  const dispatch = useAppDispatch()

  const { playlistInfo } = useAppSelector(
    (state) => ({
      playlistInfo: state.playlist.playlistInfo,
    }),
    AppShallowEqual,
  )

  useEffect(() => {
    dispatch(fetchPlaylistAction(Number(id)))
  }, [])

  return (
    <ListWrapper>
      {Object.keys(playlistInfo).length !== 0 && (
        <div className="content">
          <LeftWrapper className="left">
            <Info />
            <div className="list">
              <SeactionHeader
                title="歌曲列表"
                isLink={true}
                subTitle={playlistInfo.tracks?.length + "首歌"}
                playCounter={playlistInfo.playCount}
              />
              <Table limit={10} />
            </div>
            <div className="download">
              <p>查看更多内容，请下载客户端</p>
              <button>立即下载</button>
            </div>
            <Comments />
          </LeftWrapper>
          <RightWrapper className="right">
            <Subscribe />
            <Recommend />
            <SeactionDownload />
          </RightWrapper>
        </div>
      )}
    </ListWrapper>
  )
}

export default memo(PlayList)
