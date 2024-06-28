import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { SubTitleWrapper } from "./style"
import { useNavigate } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

const titles = ["华语", "流行", "摇滚", "民谣", "电子"]
const SubTitle: FC<IProps> = () => {
  const navigate = useNavigate()
  function subTitleClick(index: number) {
    switch (index) {
      case 0:
        console.log("华语")
        navigate("/discover/playlists?cat=华语")
        return
      case 1:
        navigate("/discover/playlists?cat=流行")
        return
      case 2:
        navigate("/discover/playlists?cat=摇滚")
        return
      case 3:
        navigate("/discover/playlists?cat=民谣")
        return
      case 4:
        navigate("/discover/playlists?cat=电子")
        return
    }
  }
  return (
    <SubTitleWrapper>
      <div className="sub-title">
        {titles.map((item, index) => (
          <div className="item" key={item}>
            <span className="text" onClick={() => subTitleClick(index)}>
              {item}
            </span>
            {index !== titles.length - 1 && <span className="slice">|</span>}
          </div>
        ))}
      </div>
    </SubTitleWrapper>
  )
}

export default memo(SubTitle)
