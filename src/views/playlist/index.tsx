import React, { memo, useEffect } from "react"
import type { FC, ReactNode } from "react"
import { ListWrapper } from "./style"
import { useSearchParams } from "react-router-dom"
import { fetchPlaylistAction } from "./store"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { LeftWrapper, RightWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"

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
      <div className="content">
        <div className="left">
          <LeftWrapper>
            <div className="info">
              <div className="i-left">
                <div className="img">
                  <img src={setGetImgSize(playlistInfo.coverImgUrl, 200)} alt="" />
                  <div className="sprite_cover cover"></div>
                </div>
              </div>
              <div className="i-righ">
                <div className="list-name">
                  <i className="sprite_icon_02 tab"></i>
                  <h2 className="name">{playlistInfo.name}</h2>
                </div>
                <div className="list-author"></div>
              </div>
            </div>
          </LeftWrapper>
        </div>
        <div className="right">
          <RightWrapper></RightWrapper>
        </div>
      </div>
    </ListWrapper>
  )
}

export default memo(PlayList)
