import React, { memo, useState, useRef, ElementRef } from "react"
import type { FC, ReactNode } from "react"
import classname from "classnames"
import { Carousel } from "antd"

import { BannerWrapper, ControlWrapper, DownloadWrapper, BannerContentWrapper } from "./style"
import { AppShallowEqual, useAppSelector } from "@/store"

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { banners } = useAppSelector((state) => {
    return {
      banners: state.recommend.banners,
    }
  }, AppShallowEqual)

  const CarouselRef = useRef<ElementRef<typeof Carousel>>(null)

  function changeBannerIndex(isNext: boolean) {
    if (isNext) {
      CarouselRef.current?.next()
    } else {
      CarouselRef.current?.prev()
    }
  }

  function afterChangeHandle(currentIndex: number) {
    setCurrentIndex(currentIndex)
  }

  function dontClickHandle(clickIndex: number) {
    CarouselRef.current?.goTo(clickIndex)
    setCurrentIndex(clickIndex)
  }

  let bgImgUrl
  if (currentIndex >= 0 && banners.length > 0) {
    bgImgUrl = banners[currentIndex].imageUrl + "?imageView&blur=40x20"
  }

  return (
    <BannerContentWrapper style={{ background: `url('${bgImgUrl}') center center / 6000px` }}>
      <div className="banner-wrap">
        <BannerWrapper>
          <Carousel
            ref={CarouselRef}
            autoplay={true}
            fade={true}
            speed={300}
            dots={false}
            afterChange={afterChangeHandle}
          >
            {banners.map((item) => (
              <img key={item.encodeId} src={item.imageUrl} alt="" />
            ))}
          </Carousel>
          <div className="dont">
            {banners.map((item, index) => (
              <div
                className={classname("dont-item", "sprite_banner", {
                  active: currentIndex === index,
                })}
                key={item.imageUrl}
                onClick={() => dontClickHandle(index)}
              ></div>
            ))}
          </div>
        </BannerWrapper>
        <DownloadWrapper className="sprite_download">
          <a href="https://music.163.com/#/download" className="sprite_download"></a>
        </DownloadWrapper>
      </div>
      <ControlWrapper>
        <div className="left-btn sprite_banner" onClick={() => changeBannerIndex(false)}></div>
        <div className="right-btn sprite_banner" onClick={() => changeBannerIndex(true)}></div>
      </ControlWrapper>
    </BannerContentWrapper>
  )
}

export default memo(TopBanner)
