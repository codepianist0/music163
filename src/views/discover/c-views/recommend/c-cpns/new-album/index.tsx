import React, { memo, useRef } from "react"
import type { ElementRef, FC, ReactNode } from "react"
import { NewAlbumWrapper } from "./style"
import { Carousel } from "antd"
import { AppShallowEqual, useAppSelector } from "@/store"
import { throttle } from "underscore"

import SeactionHeader from "@/components/seaction-header-v1"
import MenuItem from "@/components/song-menu-item-v2"

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const { newAlbum } = useAppSelector(
    (state) => ({
      newAlbum: state.recommend.newAlbum,
    }),
    AppShallowEqual,
  )
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)

  const changeBannerHandle = throttle((isNext: boolean) => {
    isNext ? carouselRef.current?.next() : carouselRef.current?.prev()
  }, 1600)

  return (
    <NewAlbumWrapper>
      <SeactionHeader title="新碟上架" />
      <div className="content">
        <div className="control">
          <div className="sprite_02 left" onClick={() => changeBannerHandle(false)}></div>
          <div className="sprite_02 right" onClick={() => changeBannerHandle(true)}></div>
        </div>
        <div className="banner">
          <Carousel ref={carouselRef} speed={1500} dots={false}>
            <div>
              <div className="item">
                {newAlbum.slice(0, 5).map((item) => (
                  <MenuItem key={item.albumId} albumInfo={item} />
                ))}
              </div>
            </div>
            <div>
              <div className="item">
                {newAlbum.slice(5, 10).map((item) => (
                  <MenuItem key={item.albumId} albumInfo={item} />
                ))}
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
