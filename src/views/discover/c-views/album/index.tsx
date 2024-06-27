import React, { memo, useEffect, useState } from "react"
import type { FC, ReactNode } from "react"
import { AlbumWrapper } from "./style"
import SeactionHeaderV3 from "@/components/seaction-header-v3"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { fetchAlbumInfoAction, fetchNewAlbumAction } from "./store"
import AlbumItemV2 from "@/components/album-item-v2"
import PageNation from "@/components/pagination"
import SubTitle from "./c-cpns/sub-title"
import { useGetSearchParams } from "@/hooks/useGetSearchParams"

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { area } = useGetSearchParams()
  const { hotAlbum, newAlbum, total } = useAppSelector(
    (state) => ({
      hotAlbum: state.album.hotAlbum,
      newAlbum: state.album.newAlbum,
      total: state.album.total,
    }),
    AppShallowEqual,
  )
  function changePageHandle(index: number) {
    dispatch(
      fetchNewAlbumAction({
        limit: 35,
        offset: (index - 1) * 35,
        area,
      }),
    )
  }
  useEffect(() => {
    dispatch(
      fetchAlbumInfoAction({
        limit: 35,
        offset: 0,
      }),
    )
  }, [])
  return (
    <AlbumWrapper>
      <div className="content">
        <div className="album hot-album">
          <SeactionHeaderV3 title="热门新碟" />
          <div className="list hot-list">
            {hotAlbum.slice(0, 10).map((item) => (
              <div className="item" key={item.id}>
                <AlbumItemV2 info={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="album new-album">
          <SeactionHeaderV3 title="全部新碟" SubTitle={<SubTitle />} />
          <div className="list new-list">
            {newAlbum.map((item) => (
              <div className="item" key={item.id}>
                <AlbumItemV2 info={item} />
              </div>
            ))}
          </div>
          <PageNation
            totals={total}
            pageSize={35}
            onChange={(index: number) => changePageHandle(index)}
          />
        </div>
      </div>
    </AlbumWrapper>
  )
}

export default memo(Album)
