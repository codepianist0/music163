import React, { memo, useEffect, useRef, useState } from "react"
import type { ElementRef, FC, ReactNode } from "react"
import { BannerWrapper } from "./style"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { Carousel } from "antd"
import classNames from "classnames"
import { useLocation, useNavigate } from "react-router-dom"
import { changeIsSelectAction, fetchDjradioByCategory } from "../../store"
import { useGetSearchParams } from "@/hooks/useGetSearchParams"

interface IProps {
  children?: ReactNode
}

const Banner: FC<IProps> = () => {
  const navifate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()
  const { bannerInfo } = useAppSelector(
    (state) => ({
      bannerInfo: state.djradio.bannerInfo,
    }),
    AppShallowEqual,
  )
  const [currentPage, setCurrentPage] = useState(0)
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  const [activeIndex, setActiveIndex] = useState<any>({})
  const { id } = useGetSearchParams()

  // 指示器
  function dontClickHandle(index: number) {
    setCurrentPage(index)
    if (carouselRef.current) {
      carouselRef.current.goTo(index)
    }
  }
  // 切换轮播页
  function changePageHandle(type: "next" | "prev") {
    if (
      (currentPage === bannerInfo.length - 1 && type === "next") ||
      (currentPage === 0 && type === "prev")
    ) {
      return
    }

    let page = currentPage
    if (type === "next") {
      carouselRef.current?.next()
      page + 1 >= bannerInfo.length ? (page = 0) : (page += 1)
    } else {
      carouselRef.current?.prev()
      page - 1 < 0 ? (page = bannerInfo.length - 1) : (page -= 1)
    }
    setCurrentPage(page)
  }
  // 分类选择
  function subItemClick(index: number, info: any) {
    setActiveIndex({
      page: currentPage,
      index,
    })
    navifate(`?id=${info.id}`)
    dispatch(changeIsSelectAction(true))
  }

  useEffect(() => {
    if (!location.search) {
      setActiveIndex({})
      dispatch(changeIsSelectAction(false))
    } else {
      // 发送网络请求
      dispatch(fetchDjradioByCategory({ id: Number(id) }))
    }
  }, [location.search])

  return (
    <BannerWrapper $noneNext={currentPage === bannerInfo.length - 1} $nonePrev={currentPage === 0}>
      <Carousel dots={false} ref={carouselRef} speed={200}>
        {bannerInfo.map((item, pIndex) => (
          <div key={item}>
            <div className="banner-item">
              {item.map((subItem: any, sIndex: number) => (
                <div
                  key={subItem.id}
                  onClick={() => subItemClick(sIndex, subItem)}
                  className={classNames("sprite_radio", "item", {
                    active: activeIndex.index === sIndex && activeIndex.page === pIndex,
                  })}
                >
                  <i
                    className="icon"
                    style={{
                      background: `url(${subItem.picWebUrl}) no-repeat`,
                      backgroundPosition:
                        activeIndex.index === sIndex && activeIndex.page === pIndex
                          ? "-48px 0"
                          : "0 0",
                    }}
                  />
                  <div className="name">{subItem.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
      <div className="dont">
        {bannerInfo.map((item, index) => (
          <i
            key={index}
            className={classNames("sprite_slide", "item", { active: index === currentPage })}
            onClick={() => dontClickHandle(index)}
          ></i>
        ))}
      </div>
      <div className="control">
        <i className="sprite_slide left" onClick={() => changePageHandle("prev")}></i>
        <i className="sprite_slide right" onClick={() => changePageHandle("next")}></i>
      </div>
    </BannerWrapper>
  )
}

export default memo(Banner)
