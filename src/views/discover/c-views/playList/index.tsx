import React, { memo, useEffect } from "react"
import type { FC, ReactNode } from "react"
import { PlaylistWrapper } from "./style"
import SeactionHeader from "./c-cpns/seaction-header"
import { useAppDispatch } from "@/store"
import { fetchPlaylistInfo, fetchTagsInfo } from "./store"
import MenuList from "./c-cpns/menu-list"
import { useGetSearchParams } from "@/hooks/useGetSearchParams"

interface IProps {
  children?: ReactNode
}

const PlayList: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { cat } = useGetSearchParams()
  useEffect(() => {
    dispatch(fetchTagsInfo())
    dispatch(
      fetchPlaylistInfo({
        cat,
      }),
    )
  }, [])
  return (
    <PlaylistWrapper>
      <div className="content">
        <SeactionHeader />
        <MenuList />
      </div>
    </PlaylistWrapper>
  )
}

export default memo(PlayList)
