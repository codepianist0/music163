import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { BottomWrapper, EnterWrapper, FooterWrapper } from "./style"
import { footerLinks } from "@/assets/data/local_data"
interface IProps {
  children?: ReactNode
}

const enterList = [
  "音乐开放平台",
  "云村交易所",
  "Amped Studio",
  "X StidioAl歌手",
  "用户认证",
  "音乐交易平台",
  "云推歌",
  "赞赏",
]

const AppFooter: FC<IProps> = () => {
  return (
    <FooterWrapper>
      <EnterWrapper>
        {enterList.map((item) => (
          <div className="item" key={item}>
            <i className="footer_enter"></i>
            <span> {item}</span>
          </div>
        ))}
      </EnterWrapper>
      <BottomWrapper>
        <div className="section links">
          {footerLinks.map((item) => (
            <div className=".item" key={item.title}>
              <a href={item.link} className="title">
                {item.title}
              </a>
              <span>|</span>
            </div>
          ))}
        </div>
        <div className="section report">
          <a href="https://jubao.163.com/">廉正举报</a>
          <span className="email">不良信息举报邮箱: 51jubao@service.netease.com</span>
          <div className="phone">客服热线：95163298</div>
        </div>
        <div className="section">
          <span className="permit">
            互联网宗教信息服务许可证：浙（2022）0000120 增值电信业务经营许可证：浙B2-20150198
          </span>
          <a href="https://beian.miit.gov.cn/">粤B2-20090191-18 工业和信息化部备案管理系统网站</a>
        </div>
        <div className="section">
          <span style={{ margin: "0px 5px" }}>
            网易公司版权所有©1997-2024杭州乐读科技有限公司运营：
          </span>
          <a href="">浙网文[2021] 1186-054号</a>
          <a href="https://beian.mps.gov.cn/#/query/webSearch">
            <i className="plice"></i>浙公网安备 33010802013307号
          </a>
          <a href="https://y.music.163.com/m/at/661f2af6e36f7c50ead8994b">算法服务公示信息</a>
        </div>
      </BottomWrapper>
    </FooterWrapper>
  )
}

export default memo(AppFooter)
