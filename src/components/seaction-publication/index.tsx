import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { PublicationWrapper } from "./style"
import { ConfigProvider } from "antd"
import TextArea from "antd/es/input/TextArea"

interface IProps {
  children?: ReactNode
}

const SeactionPublication: FC<IProps> = () => {
  return (
    <PublicationWrapper>
      <div className="top">
        <div className="img">
          <img src={require("@/assets/img/default_avatar.jpg")} alt="" />
        </div>
        <div className="info">{myTextArea}</div>
      </div>
      <div className="bottom">
        <div className="control">
          <div className="left">
            <i className="sprite_icon_02 icon expression"></i>
            <i className="sprite_icon_02 icon link"></i>
          </div>
          <div className="right">
            <div className="sprite_bottom submit">评论</div>
          </div>
        </div>
      </div>
    </PublicationWrapper>
  )
}

const myTextArea = (
  <ConfigProvider
    theme={{
      components: {
        Input: {
          activeBorderColor: "#C20C0C",
          hoverBorderColor: "#C20C0C",
        },
      },
    }}
  >
    <TextArea showCount maxLength={140} placeholder="评论" style={{ resize: "none" }} />
  </ConfigProvider>
)

export default memo(SeactionPublication)
