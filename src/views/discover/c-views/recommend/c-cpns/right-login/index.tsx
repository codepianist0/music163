import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { LoginWrapper } from "./style"

interface IProps {
  children?: ReactNode
}

const Loging: FC<IProps> = () => {
  return (
    <LoginWrapper>
      <div className="sprite_02 content">
        <div className="desc">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
        <div className="sprite_02 login">用户登录</div>
      </div>
    </LoginWrapper>
  )
}

export default memo(Loging)
