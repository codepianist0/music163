import React, { memo, useCallback, useEffect, useState } from "react"
import type { FC, ReactNode } from "react"
import { SingerWrapper } from "./style"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { changeSingerIdAction, fetchSingerInfoAction } from "./store"
import { useGetSearchParams } from "@/hooks/useGetSearchParams"
import { setGetImgSize } from "@/utils/format"
import SeactionBar from "./c-cpns/seaction-bar"
import Opus from "./c-cpns/opus"
import Album from "./c-cpns/album"
import MV from "./c-cpns/MV"
import Description from "./c-cpns/description"
import HotArtist from "./c-cpns/hot-artist"
import SeactionDownload from "@/components/seaction-download"

interface IProps {
  children?: ReactNode
}

const Singer: FC<IProps> = () => {
  const { id } = useGetSearchParams()
  const dispatch = useAppDispatch()
  const [barArray] = useState<string[]>(["热门作品", "所有专辑", "相关MV", "艺人介绍"])
  const [tabIndex, setTabIndex] = useState(0)
  const { singerInfo } = useAppSelector(
    (state) => ({ singerInfo: state.hSinger.singerInfo }),
    AppShallowEqual,
  )
  const changeIndexHandle = useCallback((index: number) => {
    setTabIndex(index)
  }, [])
  function toUserHandle() {
    console.log(singerInfo)
  }
  useEffect(() => {
    dispatch(fetchSingerInfoAction(Number(id)))
    dispatch(changeSingerIdAction(Number(id)))
  }, [])
  return (
    <SingerWrapper>
      <div className="content">
        <div className="left">
          <div className="name">
            <h2>{singerInfo?.artist?.name}</h2>
            <div className="alias">
              {singerInfo?.artist?.alias.map((item: string, index: number) => (
                <span key={item}>
                  {item}
                  {index === singerInfo.artist.alias.length - 1 ? "" : ";"}
                </span>
              ))}
            </div>
          </div>
          <div className="banner">
            <div className="img">
              <div className="cover">
                <i className="sprite_icon home" onClick={() => toUserHandle()} />
                <i className="sprite_icon favor" />
              </div>
              <img src={setGetImgSize(singerInfo.artist?.cover, 640, 300)} alt="" />
            </div>
          </div>
          <div className="bar">
            <SeactionBar
              barArray={barArray}
              tabIndex={tabIndex}
              changeIndexHandle={changeIndexHandle}
            />
          </div>
          <div className="opus">{tabIndex === 0 && <Opus />}</div>
          <div className="album">{tabIndex === 1 && <Album />}</div>
          <div className="mv">{tabIndex === 2 && <MV />}</div>
          <div className="desc">{tabIndex === 3 && <Description />}</div>
        </div>
        <div className="right">
          <HotArtist />
          <SeactionDownload />
        </div>
      </div>
    </SingerWrapper>
  )
}

export default memo(Singer)
