import React, { memo, useCallback, useEffect, useState } from "react"
import type { FC, ReactNode } from "react"
import { AlbumWrapper } from "./style"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { fetchArtistAlbumAction } from "../../store"
import { useGetSearchParams } from "@/hooks/useGetSearchParams"
import AlbumItem from "@/components/album-item"
import PageNation from "@/components/pagination"

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { id } = useGetSearchParams()
  const [page, setPage] = useState(1)
  const { albums, total } = useAppSelector(
    (state) => ({
      albums: state.hSinger.albums,
      total: state.hSinger.albumsTotal,
    }),
    AppShallowEqual,
  )

  const changePageHandle = useCallback((index: number) => {
    setPage(index)
  }, [])

  useEffect(() => {
    dispatch(fetchArtistAlbumAction({ id: Number(id) }))
  }, [])
  return (
    <AlbumWrapper>
      <div className="album-list">
        {albums.slice((page - 1) * 12, page * 12).map((item) => (
          <div className="album-item" key={item.id}>
            <AlbumItem info={item} />
          </div>
        ))}
      </div>
      <PageNation
        totals={total}
        pageSize={12}
        onChange={(index: number) => changePageHandle(index)}
      />
    </AlbumWrapper>
  )
}

export default memo(Album)
