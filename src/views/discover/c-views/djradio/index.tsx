import React, { memo, useEffect } from "react"
import type { FC, ReactNode } from "react"
import { DJRadioWrapper } from "./style"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { changeIsSelectAction, fetchDjRadioInfo, fetchDjradioByCategory } from "./store"
import Banner from "./c-cpns/banner"
import RadioAll from "./c-cpns/radio-all"
import RadioItem from "./c-cpns/radio-item"
import { useGetSearchParams } from "@/hooks/useGetSearchParams"

interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { id } = useGetSearchParams()
  const { isSelect } = useAppSelector(
    (state) => ({
      isSelect: state.djradio.isSelect,
    }),
    AppShallowEqual,
  )
  useEffect(() => {
    dispatch(fetchDjRadioInfo())
    if (id) {
      dispatch(fetchDjradioByCategory({ id: Number(id) }))
      dispatch(changeIsSelectAction(true))
    }
  }, [])
  return (
    <DJRadioWrapper>
      <div className="content">
        <Banner />
        {isSelect ? <RadioItem /> : <RadioAll />}
      </div>
    </DJRadioWrapper>
  )
}

export default memo(Djradio)
