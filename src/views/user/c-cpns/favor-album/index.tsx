import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { FavorWrapper } from "./style"
import SeactionHeaderV3 from "@/components/seaction-header-v3"
import { AppShallowEqual, useAppSelector } from "@/store"
import SongMenuItemV1 from "@/components/song-menu-item-v1"

interface IProps {
  children?: ReactNode
}

const FavorAlbum: FC<IProps> = () => {
  const { userInfo, album } = useAppSelector(
    (state) => ({
      userInfo: state.user.userInfo,
      album: state.user.album,
    }),
    AppShallowEqual,
  )
  return (
    <FavorWrapper>
      <SeactionHeaderV3 title={`${userInfo.profile?.nickname}创建的歌单（${album.length}）`} />
      <div className="menu-list">
        {album.map((item) => (
          <div className="item" key={item.id}>
            <SongMenuItemV1 menuInfo={item} />
          </div>
        ))}
      </div>
    </FavorWrapper>
  )
}

export default memo(FavorAlbum)
