import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { NavLink } from "react-router-dom"
import { Input } from "antd"

import { HeaderWrapper, LeaftWrapper, RightWrapper } from "./style"

import navData from "@/assets/data/nav-bar-data.json"
import { SearchOutlined } from "@ant-design/icons"

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <div className="navBar">
        <LeaftWrapper>
          <h1 className="logo-wrapper">
            <a className="logo sprite_01" href="/">
              网易云音乐
            </a>
          </h1>
          <div className="nav-list">
            {navData.map((item) => (
              <div className="item" key={item.label}>
                {item.router && <NavLink to={item.router}>{item.label}</NavLink>}
                {item.url && <a href={item.url}>{item.label}</a>}
              </div>
            ))}
          </div>
        </LeaftWrapper>
        <RightWrapper>
          <div className="search">
            <Input
              className="search-content"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
          </div>
          <div className="artist-center">
            <span>创作者中心</span>
          </div>
          <div className="login">
            <span>登录</span>
          </div>
        </RightWrapper>
      </div>
      <div className="bottom-line"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
