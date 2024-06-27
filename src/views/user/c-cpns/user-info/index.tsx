import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { InfoWrapper } from "./style"
import { AppShallowEqual, useAppSelector } from "@/store"
import { setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
}

const UserInfo: FC<IProps> = () => {
  const { userInfo, eventSize, concernSize, fansSize } = useAppSelector(
    (state) => ({
      userInfo: state.user.userInfo,
      eventSize: state.user.eventSize,
      concernSize: state.user.concernSize,
      fansSize: state.user.fansSize,
    }),
    AppShallowEqual,
  )

  function toHomeHandle() {
    // navigate(`/singer?id=${userId}`)
  }
  return (
    <InfoWrapper>
      <div className="left">
        <div className="img">
          <div className="cover" />
          <img src={setGetImgSize(userInfo.profile?.avatarUrl, 180)} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="top">
          <div className="t-left">
            <div className="name">{userInfo.profile?.nickname}</div>
            <div className="sprite_icon_03 level">
              <span className="span">7</span>
              <i className="sprite_icon_03 icon" />
            </div>
            <i className="sprite_icon_02 gender" />
            <div className="sprite_buttom_02 button message">
              <span>发私信</span>
            </div>
            <div className="sprite_buttom_02 button favor">
              <span>关 注</span>
            </div>
          </div>
          <div className="t-right">
            <div className="sprite_buttom home" onClick={() => toHomeHandle()}>
              <span className="sprite_buttom text">查看歌手页</span>
            </div>
          </div>
        </div>
        <div className="authentication">
          <i className="sprite_icon_03 attestation" />
          <span className="text">{userInfo.profile?.detailDescription}</span>
        </div>
        <div className="line" />
        <div className="bottom">
          <div className="tab">
            <div className="event t-item">
              <div className="number">{eventSize}</div>
              <span className="text">动态</span>
            </div>
            <div className="slice" />
            <div className="event t-item">
              <div className="number">{concernSize}</div>
              <span className="text">关注</span>
            </div>
            <div className="slice" />
            <div className="event t-item">
              <div className="number">{fansSize}</div>
              <span className="text">粉丝</span>
            </div>
          </div>
          <div className="area">所在地区: 北京市</div>
        </div>
      </div>
    </InfoWrapper>
  )
}

export default memo(UserInfo)
