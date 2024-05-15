import styled from "styled-components"

export const VolumeWrapper = styled.div`
  position: absolute;
  z-index: 9;
  right: 203px;
  bottom: 47px;
  .process {
    width: 32px;
    height: 113px;
    background-position: 0 -503px;
    display: flex;
    align-items: center;
    justify-content: center;
    .ant-slider {
      top: 5px;
      margin: 0;
      height: 90px;
      width: 4px;
      .ant-slider-handle {
        position: absolute;
        left: -3.5px;
        width: 18px;
        height: 20px;
        background: url(${require("@/assets/img/sprite_icon.png")}) -40px -250px;
        &:hover {
          background-position: -40px -280px;
        }
        &::before,
        &::after {
          display: none;
        }
      }
      .ant-slider-track {
        left: 4px;
        position: absolute;
        background: url(${require("@/assets/img/playbar_sprite.png")}) -40px bottom;
      }
    }
  }
`
