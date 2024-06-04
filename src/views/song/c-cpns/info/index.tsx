import React, { memo, useState } from "react"
import type { FC, ReactNode } from "react"
import { InfoWrapper } from "./style"
import { AppShallowEqual, useAppSelector } from "@/store"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
}

// 获取歌曲是否免费
function getSongType(num: number) {
  switch (num) {
    case 1:
      return "VIP单曲"
    case 8:
      return "单曲"
  }
}

const Info: FC<IProps> = () => {
  const { songInfo, lyric, total } = useAppSelector(
    (state) => ({
      songInfo: state.song.songInfo,
      lyric: state.song.lyric,
      total: state.song.total,
    }),
    AppShallowEqual,
  )
  const [isShowDesc, setIsShowDesc] = useState(false)
  return (
    <InfoWrapper $isShowDesc={isShowDesc}>
      <div className="left">
        <div className="sprite_cover cover">
          <div className="img-content">
            <img src={setGetImgSize(songInfo?.al?.picUrl, 130)} alt="" />
          </div>
        </div>
        <div className="link">
          <i className="sprite_icon_02 icon" />
          生成外链播放器
        </div>
        <div className="open">点击打开客户端</div>
      </div>
      <div className="right">
        <div className="title">
          <span className="type">{getSongType(songInfo?.fee)}</span>
          <div className="name">
            <div className="chines">
              <div className="c-name">{songInfo?.name}</div>
              {songInfo && <i className="sprite_icon_02 mv"></i>}
            </div>
            <div className="english">{songInfo?.tns?.[0]}</div>
          </div>
        </div>
        <div className="singer">
          <span className="text">歌手: </span>
          {songInfo?.ar?.map((item: any) => (
            <span key={item.id} className="link">
              {item.name}
            </span>
          ))}
        </div>
        <div className="album">
          <span className="text">所属专辑: </span>
          <span className="link">{songInfo?.al?.name}</span>
        </div>
        <div className="list-control">
          {getSongType(songInfo?.fee) === "VIP单曲" ? (
            <div className="v-add">
              <div className="play">
                <span>VIP尊享</span>
              </div>
              <div className="push"></div>
            </div>
          ) : (
            <div className="add">
              <div className="sprite_buttom play">
                <i className="sprite_buttom icon" />
                <span>播放</span>
              </div>
              <div className="sprite_buttom push"></div>
            </div>
          )}

          <div className="sprite_buttom p-left favor">
            <span className="sprite_buttom">收藏</span>
          </div>
          <div className="sprite_buttom p-left share">
            <span className="sprite_buttom">分享</span>
          </div>
          <div className="sprite_buttom p-left download">
            <span className="sprite_buttom">下载</span>
          </div>
          <div className="sprite_buttom p-left comments">
            <span className="sprite_buttom">({total})</span>
          </div>
        </div>
        <div className="lyric">
          <div className="info">{lyric}</div>
          <div className="is-hidden">
            <span onClick={() => setIsShowDesc(!isShowDesc)}>
              {isShowDesc ? "收起" : "展开"} <i className="sprite_icon_02 icon"></i>
            </span>
          </div>
        </div>
        <div className="err">报错</div>
      </div>
    </InfoWrapper>
  )
}

export default memo(Info)
