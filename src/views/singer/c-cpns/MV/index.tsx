import React, { memo, useCallback, useEffect, useState } from "react"
import type { FC, ReactNode } from "react"
import { MVWrapper } from "./style"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { fetchMvAction } from "../../store"
import { useGetSearchParams } from "@/hooks/useGetSearchParams"
import Video from "@/components/video-item"
import Pagination from "@/components/pagination"

interface IProps {
  children?: ReactNode
}

const MV: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { id } = useGetSearchParams()
  const [pageIndex, setPageIndex] = useState(1)
  const { mv } = useAppSelector(
    (state) => ({
      mv: state.hSinger.mv,
    }),
    AppShallowEqual,
  )

  const changePageHandle = useCallback((index: number) => {
    setPageIndex(index)
  }, [])

  useEffect(() => {
    dispatch(fetchMvAction({ id: Number(id) }))
  }, [])

  return (
    <MVWrapper>
      <div className="mv-list">
        {mv.slice((pageIndex - 1) * 12, pageIndex * 12).map((item) => (
          <div className="video-item" key={item.id}>
            <Video info={item} />
          </div>
        ))}
      </div>
      {mv.length !== 0 && (
        <div className="pagenation">
          <Pagination
            totals={100}
            pageSize={12}
            onChange={(index: number) => changePageHandle(index)}
          />
        </div>
      )}
    </MVWrapper>
  )
}

export default memo(MV)
