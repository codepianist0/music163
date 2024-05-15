import React, { memo, useEffect, useRef } from "react"
import type { FC, ReactNode } from "react"
import { ListWrapper, LyricWrapper, MenuLyricWrapper } from "./style"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { getFormatTime } from "@/utils/format"
import classNames from "classnames"
import { changeCurrentSongAction, changemenuIndexAction, fetchSongLyricAction } from "../../store"
import { useLocalStore } from "@/hooks/useLocalstore"

interface IProps {
  children?: ReactNode
  setIsShowLyric: (isShow: boolean) => void
}

const MenuLyric: FC<IProps> = (props) => {
  const { setIsShowLyric } = props
  const { songMenu, currentSong, menuIndex, currentLyric, lyricIndex } = useAppSelector(
    (state) => ({
      songMenu: state.playerr.songMenu,
      currentSong: state.playerr.currentSong,
      menuIndex: state.playerr.menuIndex,
      currentLyric: state.playerr.currentLyric,
      lyricIndex: state.playerr.lyricIndex,
    }),
    AppShallowEqual,
  )
  const dispatch = useAppDispatch()
  const activeRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [, saveLocalSongLyric] = useLocalStore("lyric", [])
  function songClickHandle(index: number) {
    dispatch(changemenuIndexAction(index))
    dispatch(changeCurrentSongAction(songMenu[index]))
    dispatch(fetchSongLyricAction(songMenu[index].id))
  }
  useEffect(() => {
    if (containerRef.current && activeRef.current?.clientHeight) {
      const containerHeight = containerRef.current!.clientHeight // 容器的高度
      const contentHeight = activeRef.current!.clientHeight // item的高度
      const contentOffset = activeRef.current!.offsetTop // item左上角距离顶部的高度
      const translateY = contentHeight / 2 + contentOffset - containerHeight / 2
      containerRef.current.style.transform = `translateY(${-translateY}px)`
    }
  }, [lyricIndex])
  useEffect(() => {
    saveLocalSongLyric(currentLyric)
  }, [currentLyric])

  return (
    <MenuLyricWrapper>
      <div className="playlist_bg top">
        <div className="left">
          <div className="title">
            <h4>播放列表({songMenu.length})</h4>
          </div>
          <div className="control">
            <div className="favor">
              <i className="playlist_sprite icon favor-i"></i>
              收藏全部
            </div>
            <div className="slice"></div>
            <div className="delete">
              <i className="playlist_sprite icon delete-i"></i>
              清除
            </div>
          </div>
        </div>
        <div className="right">
          <div className="title">{currentSong.name}</div>
          <i className="playlist_sprite close" onClick={() => setIsShowLyric(false)}></i>
        </div>
      </div>
      <div className="playlist_bg bottom">
        <ListWrapper>
          {songMenu.map((item, songIndex) => (
            <div
              className={classNames("l-item", {
                active: songIndex === menuIndex,
              })}
              key={item.id}
              onClick={() => songClickHandle(songIndex)}
            >
              <div className="i-left">
                <i
                  className="playlist_sprite icon"
                  style={{ opacity: songIndex === menuIndex ? "1" : "0" }}
                ></i>
                <div className="name">{item.name}</div>
              </div>
              <div className="i-right">
                <div className="control">
                  <i className="playlist_sprite icon favor"></i>
                  <i className="playlist_sprite icon share"></i>
                  <i className="playlist_sprite icon download"></i>
                  <i className="playlist_sprite icon delete"></i>
                </div>
                <div className="authors">
                  {item?.ar?.map((artist: any, index: number) => (
                    <span className="author" key={artist.id}>
                      {artist.name}
                      {index !== item?.ar.length - 1 ? "/" : ""}
                    </span>
                  ))}
                </div>
                <div className="duration">{getFormatTime(item.dt)}</div>
                <div className="playlist_sprite from"></div>
              </div>
            </div>
          ))}
        </ListWrapper>
        <div className="scroll"></div>
        <LyricWrapper>
          <div ref={containerRef} className="content">
            {currentLyric.map((item, index) => (
              <div
                className={classNames("item", { active: index === lyricIndex })}
                key={index}
                ref={index === lyricIndex ? activeRef : null}
              >
                {item.text}
              </div>
            ))}
          </div>
        </LyricWrapper>
      </div>
    </MenuLyricWrapper>
  )
}

export default memo(MenuLyric)
