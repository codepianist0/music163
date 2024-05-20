import React, { memo, useCallback, useEffect, useRef, useState } from "react"
import type { FC, ReactNode } from "react"
import { PlayerControlWrapper, PlayerWrapper } from "./style"
import { Slider, Tooltip } from "antd"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import {
  changeCurrentLyricAction,
  changeCurrentSongAction,
  changeLyricIndexAction,
  changeSongMenuAction,
  changemenuIndexAction,
  fetchSongLyricAction,
} from "./store"
import { getFormatTime, setGetImgSize } from "@/utils/format"
import { getSongPlayUrl } from "@/utils/handler-player"
import { yugeEvent } from "@/utils/event-bus"
import { useLocalStore } from "@/hooks/useLocalstore"
import VolumeBar from "./c-cpns/volume-bar/volume-bar"
import { getRandomIndex } from "@/utils/getrandomindex"
import MenuLyric from "./c-cpns/menu-lyric"

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = () => {
  const { currentSong, songMenu, menuIndex, currentLyric, lyricIndex } = useAppSelector((state) => {
    return {
      currentSong: state.player.currentSong,
      songMenu: state.player.songMenu,
      menuIndex: state.player.menuIndex,
      currentLyric: state.player.currentLyric,
      lyricIndex: state.player.lyricIndex,
    }
  }, AppShallowEqual)
  const dispatch = useAppDispatch()

  const audioRef = useRef<HTMLAudioElement>(null)
  const [isLock, setIsLock] = useState(true) // 锁定bar
  const [process, setProcess] = useState(0) // 进度
  const [isPlay, setIsPlay] = useState(false) // 是否播放
  const [currentTime, setCurrentTime] = useState(0) // ms
  const [isdrag, setIsDrag] = useState(false) // 是否拖动进度条
  const [palyType, setPlayType] = useState(0)
  const type = ["循环", "随机", "单曲"]
  const [ischangeVolume, setIsChangeVolume] = useState(false) // 音量
  const [isShowLyric, setIsShowLyric] = useState(false) // 歌单和歌词

  // 1. 播放逻辑
  // 1.1 切换播放与暂停
  function handleChangePlay() {
    if (isPlay) {
      audioRef.current?.pause()
      setIsPlay(false)
    } else {
      audioRef.current?.play().catch((err) => {
        console.log(err)
        setIsPlay(false)
      })
      setIsPlay(true)
    }
  }
  // 1.2 切换歌曲
  function changeSongHandleByBar(isNext?: boolean, isClick?: boolean) {
    let currentIndex = 0
    switch (type[palyType]) {
      case "循环":
        currentIndex = (isNext ? 1 : -1) + menuIndex
        break
      case "随机":
        currentIndex = getRandomIndex(songMenu.length, menuIndex)
        break
      case "单曲":
        if (isClick) {
          currentIndex = (isNext ? 1 : -1) + menuIndex
          break
        }
        currentIndex = menuIndex
        audioRef.current!.currentTime = 0
        audioRef.current?.play()
    }
    // 边界判断
    if (currentIndex < 0) {
      currentIndex = songMenu.length - 1
    } else if (currentIndex >= songMenu.length) {
      currentIndex = 0
    }

    dispatch(changemenuIndexAction(currentIndex))
    dispatch(changeCurrentSongAction(songMenu[currentIndex]))
    dispatch(fetchSongLyricAction(songMenu[currentIndex].id))
  }

  // 1.3 获取播放的时长
  function timeUpdateHandle() {
    // 获取当前播放的时间ms
    const currentTime = audioRef.current!.currentTime * 1000
    if (!isdrag) {
      setCurrentTime(currentTime)
      setProcess((currentTime / currentSong.dt) * 100)
    }
    // 获取当前匹配的歌词
    let index = -1
    for (let i = 0; i < currentLyric.length - 1; i++) {
      if (currentLyric[i].time > currentTime) {
        index = i - 1
        break
      }
    }
    if (index === lyricIndex || index === -1) return
    dispatch(changeLyricIndexAction(index))
  }

  // 1.4 播放模式
  function changePlayTypeHandle() {
    palyType >= type.length - 1 ? setPlayType(0) : setPlayType(palyType + 1)
  }

  // 2. 进度条改变
  function handleSliderChanging(value: number) {
    setIsDrag(true)
    setProcess(value)
    setCurrentTime((value / 100) * currentSong.dt)
  }
  function handleSliderChanged(value: number) {
    setIsDrag(false)
    const currtTime = ((value / 100) * currentSong.dt) / 1000
    audioRef.current!.currentTime = currtTime
  }

  // 3. 副作用
  const [localSong, saveLocalCurrentSong] = useLocalStore("currentSong", {})
  const [localSongLyric, saveLocalSongLyric] = useLocalStore("lyric", [])
  const [localSongMenu, saveLocalSongMenu] = useLocalStore("songMenu", [])
  const [localMenuIndex, saveLocalMenuIndex] = useLocalStore("menuIndex", 0)
  // 当歌曲发生变化
  useEffect(() => {
    // 1. 重新播放
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    if (isPlay) {
      audioRef.current?.play().catch((err) => {
        console.log(err)
      })
    }
    // 2. 将播放的歌曲保存到本地
    if (Object.keys(currentSong).length !== 0) {
      saveLocalCurrentSong(currentSong)
      saveLocalSongLyric(currentLyric)
      saveLocalMenuIndex(menuIndex)
    }
  }, [currentSong])

  // 歌单发生变化
  useEffect(() => {
    if (Object.keys(songMenu).length !== 0) {
      saveLocalSongMenu(songMenu)
    }
  }, [songMenu])

  useEffect(() => {
    // event-bus
    const changePlay = (isPlay: boolean) => {
      setIsPlay(isPlay)
    }
    const changePlaySongByIndex = (changeIndex: number) => {
      dispatch(changemenuIndexAction(changeIndex))
      dispatch(changeCurrentSongAction(songMenu[changeIndex]))
      dispatch(fetchSongLyricAction(songMenu[changeIndex].id))
    }
    yugeEvent.on("changePlay", changePlay)
    yugeEvent.on("changePlaySongByIndex", changePlaySongByIndex)

    // 2. 获取本地保存的歌曲数据
    dispatch(changeCurrentSongAction(localSong))
    dispatch(changeCurrentLyricAction(localSongLyric))
    dispatch(changeSongMenuAction(localSongMenu))
    dispatch(changemenuIndexAction(localMenuIndex))
    return () => {
      yugeEvent.off("changePlay", changePlay)
      yugeEvent.off("changePlaySongByIndex", changePlaySongByIndex)
    }
  }, [])

  // 音量
  const handleVolumeChange = useCallback((currentVolume: number) => {
    audioRef.current!.volume = currentVolume
  }, [])

  return (
    <PlayerWrapper $isLock={isLock}>
      {/* 是否锁定 */}
      <div className="content">
        <div className="player-wrapper lock-bar">
          <i className="player-wrapper lock" onClick={() => setIsLock(!isLock)} />
        </div>
      </div>
      <div className="player-wrapper player-bar">
        <PlayerControlWrapper $isLock={isLock} $isPlay={isPlay} $playType={palyType}>
          {/* 播放按钮 */}
          <div className="left">
            <i
              className="player-wrapper icon prev"
              onClick={() => changeSongHandleByBar(false, true)}
            />
            <i className="player-wrapper icon play" onClick={handleChangePlay} />
            <i
              className="player-wrapper icon next"
              onClick={() => changeSongHandleByBar(true, true)}
            />
          </div>
          <div className="center">
            <div className="img">
              <img src={setGetImgSize(currentSong?.al?.picUrl, 34)} alt="" />
              <div className="player-wrapper cover"></div>
            </div>
            <div className="info">
              <div className="top">
                <a className="name">{currentSong?.name}</a>
                <i className="player-wrapper play-mv" />
                {currentSong?.ar?.slice(0, 2).map((item: any) => (
                  <a key={item.id} className="author">
                    {item.name}
                  </a>
                ))}
                <i className="player-wrapper from-menu" />
              </div>
              <div className="bottom">
                <Slider
                  tooltip={{ formatter: null }}
                  value={process}
                  step={0.3}
                  onChange={handleSliderChanging}
                  onChangeComplete={handleSliderChanged}
                />
                <div className="time">
                  <span className="current">{getFormatTime(currentTime)}</span>
                  <span className="slice">/</span>
                  <span className="total">{getFormatTime(currentSong.dt)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="r-left">
              <i className="icon in-drow" />
              <i className="player-wrapper icon favor" />
              <i className="player-wrapper icon share" />
            </div>
            <div className="player-wrapper slice"></div>
            <div className="r-right">
              <i
                className="player-wrapper icon loudness"
                onClick={() => setIsChangeVolume(!ischangeVolume)}
              />
              <>
                <Tooltip placement="top" title={type[palyType]} arrow={true}>
                  <i className="player-wrapper icon play-mode" onClick={changePlayTypeHandle} />
                </Tooltip>
              </>
              <div
                className="player-wrapper singer-menu"
                onClick={() => setIsShowLyric(!isShowLyric)}
              >
                <span>{songMenu.length}</span>
              </div>
            </div>
          </div>
        </PlayerControlWrapper>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdateHandle}
        preload="auto"
        onEnded={() => changeSongHandleByBar(true)}
      />
      {isShowLyric && <MenuLyric setIsShowLyric={setIsShowLyric} />}
      {ischangeVolume && <VolumeBar handleVolumeChange={handleVolumeChange} />}
    </PlayerWrapper>
  )
}

export default memo(Player)
