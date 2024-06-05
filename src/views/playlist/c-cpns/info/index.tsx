import React, { memo, useEffect, useRef, useState } from "react"
import type { FC, ReactNode } from "react"
import { InfoWrapper } from "./style"
import { getFormatCouter, getFormatDate, setGetImgSize } from "@/utils/format"
import { AppShallowEqual, useAppSelector } from "@/store"

interface IProps {
  children?: ReactNode
}

const Info: FC<IProps> = () => {
  const { playlistInfo } = useAppSelector(
    (state) => ({
      playlistInfo: state.playlist.playlistInfo,
    }),
    AppShallowEqual,
  )
  const [isShowDesc, setIsShowDesc] = useState(false)
  const [unfoldIsShow, setUnfoldIsShow] = useState(false)

  // 展开是否显示
  const descRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const height = descRef.current?.scrollHeight
    if (height && height <= 180) {
      descRef.current.style.height = "auto"
    }
    if (height && height > 180) {
      setUnfoldIsShow(true)
    }
  }, [])

  return (
    <InfoWrapper $isShowDesc={isShowDesc}>
      <div className="i-left">
        <div className="img">
          <img src={setGetImgSize(playlistInfo.coverImgUrl, 200)} alt="" />
          <div className="sprite_cover cover"></div>
        </div>
      </div>
      <div className="i-righ">
        <div className="list-name">
          <i className="sprite_icon_02 tab" />
          <h2 className="name">{playlistInfo.name}</h2>
        </div>
        <div className="list-author">
          <div className="img">
            <img src={setGetImgSize(playlistInfo.creator?.avatarUrl, 35)} alt="" />
          </div>
          <div className="name">{playlistInfo.creator?.nickname}</div>
          {playlistInfo?.creator?.avatarDetail && (
            <img
              className="level"
              src={setGetImgSize(playlistInfo?.creator?.avatarDetail?.identityIconUrl, 13)}
            />
          )}
          <div className="date">{getFormatDate(playlistInfo?.createTime)} 创建</div>
        </div>
        <div className="list-control">
          <div className="add">
            <div className="sprite_buttom play">
              <i className="sprite_buttom icon" />
              <span>播放</span>
            </div>
            <div className="sprite_buttom push"></div>
          </div>
          <div className="sprite_buttom p-left favor">
            <span className="sprite_buttom">({getFormatCouter(playlistInfo.subscribedCount)})</span>
          </div>
          <div className="sprite_buttom p-left share">
            <span className="sprite_buttom">({getFormatCouter(playlistInfo.shareCount)})</span>
          </div>
          <div className="sprite_buttom p-left download">
            <span className="sprite_buttom">下载</span>
          </div>
          <div className="sprite_buttom p-left comments">
            <span className="sprite_buttom">({getFormatCouter(playlistInfo.commentCount)})</span>
          </div>
        </div>
        <div className="list-tags">
          <div className="name">标签：</div>
          {playlistInfo.tags?.map((item: string) => (
            <div className="sprite_buttom tag" key={item}>
              <span className="sprite_buttom">{item}</span>
            </div>
          ))}
        </div>
        <div className="list-desc" ref={descRef}>
          {playlistInfo.description}
        </div>
        {unfoldIsShow && (
          <div className="desc-detail">
            <span onClick={() => setIsShowDesc(!isShowDesc)}>
              {isShowDesc ? "收起" : "展开"} <i className="sprite_icon_02 icon"></i>
            </span>
          </div>
        )}
      </div>
    </InfoWrapper>
  )
}

export default memo(Info)
