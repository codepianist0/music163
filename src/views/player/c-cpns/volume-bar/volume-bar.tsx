import React, { memo, useState } from "react"
import type { FC, ReactNode } from "react"
import { VolumeWrapper } from "./style"
import { Slider } from "antd"

interface IProps {
  children?: ReactNode
  handleVolumeChange: (currentVolume: number) => void
}

const VolumeBar: FC<IProps> = (props) => {
  const { handleVolumeChange } = props
  const [process, setProsess] = useState(100)
  function handleSliderChanging(value: number) {
    const volume = value / 100
    setProsess(value)
    handleVolumeChange(volume)
  }
  function handleSliderChanged(value: number) {
    const volume = value / 100
    handleVolumeChange(volume)
  }
  return (
    <VolumeWrapper>
      <div className="player-wrapper process">
        <Slider
          vertical
          keyboard
          value={process}
          onChange={handleSliderChanging}
          onChangeComplete={handleSliderChanged}
          tooltip={{ formatter: null }}
        />
      </div>
    </VolumeWrapper>
  )
}

export default memo(VolumeBar)
