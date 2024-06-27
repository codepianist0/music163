import React, { memo, useEffect } from "react"
import type { FC, ReactNode } from "react"
import { SingerWrapper } from "./style"
import Categories from "./c-cpns/categories"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { fetchSingerInfoAction } from "./store"
import SeactionHeaderV3 from "@/components/seaction-header-v3"
import SingerItem from "./c-cpns/singer-item"
import CategoriesBar from "./c-cpns/categories-bar"
import { useGetSearchParams } from "@/hooks/useGetSearchParams"

interface IProps {
  children?: ReactNode
}

const Singer: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  const { singerList, title } = useAppSelector(
    (state) => ({
      singerList: state.singer.singerList,
      title: state.singer.title,
    }),
    AppShallowEqual,
  )
  const { id } = useGetSearchParams()

  useEffect(() => {
    dispatch(fetchSingerInfoAction({}))
  }, [])
  return (
    <SingerWrapper>
      <div className="content">
        <div className="left">
          <Categories />
        </div>
        <div className="right">
          <div className="hot">
            <SeactionHeaderV3 title={title} isMore={true} />
            {id && <CategoriesBar />}
            <div className="hot-list">
              {singerList.slice(0, 10).map((item: any) => (
                <div className="item top-item" key={item.id}>
                  <SingerItem info={item} haveImg={true} />
                </div>
              ))}
              <div className="line" />
              {singerList.slice(10).map((item: any) => (
                <div className="item bottom-item" key={item.id}>
                  <SingerItem info={item} haveImg={false} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SingerWrapper>
  )
}

export default memo(Singer)
