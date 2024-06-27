import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { RadioWrapper } from "./style"
import SeactionHeaderV3 from "@/components/seaction-header-v3"
import { AppShallowEqual, useAppSelector } from "@/store"
import DjradioItemV1 from "@/components/djradio-item-v1"

interface IProps {
  children?: ReactNode
}

const CreateAlbum: FC<IProps> = () => {
  const { userInfo, DJRadio, subCount } = useAppSelector(
    (state) => ({
      userInfo: state.user.userInfo,
      DJRadio: state.user.DJRadio,
      subCount: state.user.subCount,
    }),
    AppShallowEqual,
  )
  return (
    <RadioWrapper>
      <SeactionHeaderV3 title={`${userInfo.profile?.nickname}创建的电台`} />
      <div className="dj-list">
        {DJRadio.map((item) => (
          <div className="item" key={item.id}>
            <DjradioItemV1 info={item} subCount={subCount} />
          </div>
        ))}
      </div>
    </RadioWrapper>
  )
}

export default memo(CreateAlbum)
