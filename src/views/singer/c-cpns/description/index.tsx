import React, { memo, useEffect } from "react"
import type { FC, ReactNode } from "react"
import { MVWrapper } from "../MV/style"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { fetchDescriptionAction } from "../../store"
import { useGetSearchParams } from "@/hooks/useGetSearchParams"
import { DescWrapper } from "./style"

interface IProps {
  children?: ReactNode
}

const Description: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { id } = useGetSearchParams()
  const { description, artistName } = useAppSelector(
    (state) => ({
      description: state.hSinger.description,
      artistName: state.hSinger.artistName,
    }),
    AppShallowEqual,
  )
  useEffect(() => {
    dispatch(fetchDescriptionAction(Number(id)))
  }, [])
  return (
    <DescWrapper>
      <div className="desc">
        <h2 className="title">
          <i className="icon" />
          <span>{artistName}简介</span>
        </h2>
        <p>{description.briefDesc}</p>
      </div>
      <div className="order">
        {description.introduction.map((item: any) => (
          <div className="o-desc" key={item.ti}>
            <h2 className="title">{item.ti}</h2>
            <p>{item.txt}</p>
          </div>
        ))}
      </div>
    </DescWrapper>
  )
}

export default memo(Description)
