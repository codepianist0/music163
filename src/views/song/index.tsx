import React, { memo, useEffect } from "react"
import type { FC, ReactNode } from "react"
import { SongWrapper } from "./style"
import Info from "./c-cpns/info"
import { useSearchParams } from "react-router-dom"
import { useAppDispatch } from "@/store"
import { fetchSongInfoAction } from "./store"
import Comments from "./c-cpns/comments"
import Contain from "./c-cpns/contain"
import Simi from "./c-cpns/simi"
import SeactionDownload from "@/components/seaction-download"

interface IProps {
  children?: ReactNode
}

const Song: FC<IProps> = () => {
  const [searchParams] = useSearchParams()
  const { id } = Object.fromEntries(searchParams)
  // 处理id
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchSongInfoAction(Number(id)))
  }, [])
  return (
    <SongWrapper>
      <div className="content">
        <div className="left">
          <Info />
          <Comments />
        </div>
        <div className="right">
          <Contain />
          <Simi />
          <SeactionDownload />
        </div>
      </div>
    </SongWrapper>
  )
}

export default memo(Song)
