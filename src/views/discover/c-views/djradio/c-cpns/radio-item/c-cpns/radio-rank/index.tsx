import React, { memo, useState } from "react"
import type { FC, ReactNode } from "react"
import { RankWrapper } from "./style"
import SeactionHeaderV3 from "@/components/seaction-header-v3"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import RankItem from "../djradio-item-rank"
import Pagination from "@/components/pagination"
import { fetchDjradioByCategory } from "../../../../store"
import { useGetSearchParams } from "@/hooks/useGetSearchParams"
import classNames from "classnames"

interface IProps {
  children?: ReactNode
}

const RadioRank: FC<IProps> = () => {
  const { categoryRankDjradio, totalCount } = useAppSelector(
    (state) => ({
      categoryRankDjradio: state.djradio.categoryRankDjradio,
      totalCount: state.djradio.totalCount,
    }),
    AppShallowEqual,
  )
  const dispatch = useAppDispatch()
  const { id } = useGetSearchParams()
  const [activeTab, setActiveTab] = useState("hot")

  function changePageHandle(page: number) {
    const offset = (page - 1) * 26
    dispatch(fetchDjradioByCategory({ id: Number(id), limit: 26, offset }))
  }

  function tabClick(name: "fast" | "hot") {
    setActiveTab(name)
  }
  const RightEl = (
    <div className="r-content">
      <div
        className={classNames("tab", { active: activeTab === "fast" })}
        onClick={() => tabClick("fast")}
      >
        上升最快
      </div>
      <div className="slice">|</div>
      <div
        className={classNames("tab", { active: activeTab === "hot" })}
        onClick={() => tabClick("hot")}
      >
        最热电台
      </div>
    </div>
  )

  return (
    <RankWrapper>
      <SeactionHeaderV3 title="电台排行榜" Right={RightEl} />
      <div className="list">
        {categoryRankDjradio.slice(0, 26).map((item) => (
          <div className="item" key={item.id}>
            <RankItem info={item} />
          </div>
        ))}
      </div>
      <Pagination totals={totalCount} pageSize={26} onChange={(index) => changePageHandle(index)} />
    </RankWrapper>
  )
}

export default memo(RadioRank)
