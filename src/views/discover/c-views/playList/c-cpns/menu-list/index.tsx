import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ListWrapper } from "./style"
import { AppShallowEqual, useAppSelector } from "@/store"
import SongMenuItemV4 from "@/components/song-menu-item-v3"

interface IProps {
  children?: ReactNode
}

const MenuList: FC<IProps> = () => {
  const { songMenuList } = useAppSelector(
    (state) => ({
      songMenuList: state.discoverPlaylist.songMenuList,
    }),
    AppShallowEqual,
  )
  return (
    <ListWrapper>
      {songMenuList.map((item) => (
        <div className="item" key={item.id}>
          <SongMenuItemV4 info={item} />
        </div>
      ))}
    </ListWrapper>
  )
}

export default memo(MenuList)
