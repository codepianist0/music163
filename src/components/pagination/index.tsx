import React, { memo, useEffect, useState } from "react"
import type { FC, ReactNode } from "react"
import { PaginationWrapper } from "./style"
import classNames from "classnames"

interface IProps {
  children?: ReactNode
  totals: number
  onChange: (index: number) => void
}

const Pagination: FC<IProps> = (props) => {
  const { totals, onChange } = props
  const [pageIndex, setPageIndex] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [canClick, setcanClick] = useState([false, false])
  // 点击页码
  function handleClick(index: number): number {
    let page = 0
    if (pageIndex <= 5) {
      page = index + 2
      setPageIndex(page)
    } else if (pageIndex > 5 && pageIndex <= pageCount - 5) {
      page = pageIndex - 3 + index
      setPageIndex(page)
    } else if (pageIndex > pageCount - 5) {
      page = pageCount - 7 + index
      setPageIndex(page)
    }
    return page
  }

  // 中间的页数
  const ItemEls = Array.from({ length: pageCount > 8 ? 7 : pageCount - 1 }, (_, index) => {
    let currentIndex = 0
    if (pageIndex <= 5) {
      currentIndex = index + 2
    }
    if (pageIndex > 5 && pageIndex <= pageCount - 5) {
      currentIndex = pageIndex - 3 + index
    }
    if (pageIndex > pageCount - 5) {
      currentIndex = pageCount - 7 + index
    }
    return (
      <div
        className={classNames("sprite_buttom_02", "item", { active: currentIndex === pageIndex })}
        key={index}
        onClick={() => ChangePageHandle("clickPage", index)}
      >
        {currentIndex}
      </div>
    )
  })

  function ChangePageHandle(type: "prev" | "next" | "clickPage" | "frist" | "last", index = -1) {
    let page = 0
    switch (type) {
      case "prev":
        if (!canClick[0]) return
        page = pageIndex - 1
        setPageIndex(page)
        break
      case "next":
        if (!canClick[1]) return
        page = pageIndex + 1
        setPageIndex(page)
        break
      case "clickPage":
        page = handleClick(index)
        break
      case "frist":
        page = 1
        setPageIndex(page)
        break
      case "last":
        page = pageCount
        setPageIndex(page)
        break
    }
    onChange(page)
  }

  // 获取页码数
  useEffect(() => {
    const count = Math.ceil(totals / 20)
    setPageCount(count)
  }, [totals])

  // 上\下一页是否可以点击
  useEffect(() => {
    setcanClick(() => [pageIndex > 1 ? true : false, pageIndex < pageCount ? true : false])
  }, [pageIndex, pageCount])

  return (
    <PaginationWrapper $canClick={canClick}>
      <div className="sprite_buttom_02 btn prev" onClick={() => ChangePageHandle("prev")}>
        上一页
      </div>
      <div className="pages">
        <div
          className={classNames("sprite_buttom_02", "frist", "item", { active: pageIndex === 1 })}
          onClick={() => ChangePageHandle("frist")}
        >
          1
        </div>

        {pageIndex > 5 && <div>...</div>}
        {ItemEls}
        {pageIndex < pageCount - 5 && <div>...</div>}

        {pageCount >= 8 && (
          <div
            className={classNames("sprite_buttom_02", "last", "item", {
              active: pageIndex === pageCount,
            })}
            onClick={() => ChangePageHandle("last")}
          >
            {pageCount}
          </div>
        )}
      </div>
      <div className="sprite_buttom_02 btn next" onClick={() => ChangePageHandle("next")}>
        下一页
      </div>
    </PaginationWrapper>
  )
}

export default memo(Pagination)
