import React, { memo, useEffect } from "react"
import type { FC, ReactNode } from "react"
import { UserWrapper } from "./style"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { fetchUserInfoAction } from "./store"
import { useGetSearchParams } from "@/hooks/useGetSearchParams"
import UserInfo from "./c-cpns/user-info"
import JDRadio from "./c-cpns/dj-radio"
import FavorAlbum from "./c-cpns/favor-album"

interface IProps {
  children?: ReactNode
}

const User: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { uid } = useGetSearchParams()
  const { DJRadio, album } = useAppSelector(
    (state) => ({
      DJRadio: state.user.DJRadio,
      album: state.user.album,
    }),
    AppShallowEqual,
  )
  useEffect(() => {
    dispatch(fetchUserInfoAction({ uid: Number(uid) }))
  }, [])
  return (
    <UserWrapper>
      <div className="info">
        <UserInfo />
      </div>
      <div className="create-album">{DJRadio.length !== 0 && <JDRadio />}</div>
      <div className="favor-album">{album.length !== 0 && <FavorAlbum />}</div>
    </UserWrapper>
  )
}

export default memo(User)
