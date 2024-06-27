import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { SubTitleWrapper } from "./style"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "@/store"
import { fetchNewAlbumAction } from "../../store"

interface IProps {
  children?: ReactNode
}

const titles = ["全部", "华语", "欧美", "韩国", "日本"]
const SubTitle: FC<IProps> = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  function subTitleClick(index: number) {
    switch (index) {
      case 0:
        navigate("/discover/album?area=ALL")
        dispatch(
          fetchNewAlbumAction({
            limit: 35,
            offset: 0,
          }),
        )
        return
      case 1:
        navigate("/discover/album?area=ZH")
        dispatch(
          fetchNewAlbumAction({
            limit: 35,
            offset: 0,
            area: "ZH",
          }),
        )
        return
      case 2:
        navigate("/discover/album?area=EA")
        dispatch(
          fetchNewAlbumAction({
            limit: 35,
            offset: 0,
            area: "EA",
          }),
        )
        return
      case 3:
        navigate("/discover/album?area=KR")
        dispatch(
          fetchNewAlbumAction({
            limit: 35,
            offset: 0,
            area: "KR",
          }),
        )
        return
      case 4:
        navigate("/discover/album?area=JP")
        dispatch(
          fetchNewAlbumAction({
            limit: 35,
            offset: 0,
            area: "JP",
          }),
        )
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
