import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { ItemWrapper } from "./style"
import { setGetImgSize } from "@/utils/format"
import classNames from "classnames"
import { useNavigate } from "react-router-dom"

interface IProps {
  children?: ReactNode
  info: any
  haveImg: boolean
}

const Template: FC<IProps> = (props) => {
  const { info, haveImg } = props
  const navigate = useNavigate()
  function navigateToSingerHandle(singerId: number) {
    navigate(`/singer?id=${singerId}`)
  }
  function navigateToAccountHandle(accountId: number) {
    navigate(`/user?uid=${accountId}`)
  }
  return (
    <ItemWrapper>
      <div className="img">
        <div className="sprite_cover cover" onClick={() => navigateToSingerHandle(info.id)}></div>
        {haveImg && <img src={setGetImgSize(info.img1v1Url, 130)} alt="" />}
      </div>
      <div className={classNames("info", { notImg: !haveImg })}>
        <div className="name" onClick={() => navigateToSingerHandle(info.id)}>
          {info.name}
        </div>
        {info.accountId && (
          <i
            className="sprite_icon_02 icon"
            onClick={() => navigateToAccountHandle(info.accountId)}
          />
        )}
      </div>
    </ItemWrapper>
  )
}

export default memo(Template)
