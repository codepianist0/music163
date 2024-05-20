import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { DownloadWrapper } from "./style"
import SeactionHeaderV2 from "../seaction-header-v2"

interface IProps {
  children?: ReactNode
}

const SeactionDownload: FC<IProps> = () => {
  return (
    <DownloadWrapper>
      <SeactionHeaderV2 title="网易云音乐多端下载" />
      <div className="sprite_download_02 list">
        <a
          className="sprite_download_02 item ios"
          href="https://itunes.apple.com/cn/app/id590338362"
        >
          ios
        </a>
        <a
          className="sprite_download_02 item wos"
          href="https://music.163.com/api/pc/package/download/latest"
        >
          wos
        </a>
        <a
          className="sprite_download_02 item aos"
          href="https://music.163.com/api/android/download/latest2"
        >
          aos
        </a>
      </div>
      <p className="desc">同步歌单，随时畅听好音乐</p>
    </DownloadWrapper>
  )
}

export default memo(SeactionDownload)
