import styled from "styled-components"

export const BannerContentWrapper = styled.div`
  position: relative;
  display: flex;
  height: 285px;
  .banner-wrap {
    display: flex;
    justify-content: space-between;
    ${(props) => props.theme.mixin.wrapv2}
    height: 285px;
  }
`

export const BannerWrapper = styled.div`
  position: relative;
  width: 730px;
  margin: 0 auto;
  overflow: hidden;
  img {
    height: 285px;
    object-fit: cover;
  }
  .dont {
    position: absolute;
    left: 0;
    bottom: 10px;
    display: flex;
    justify-content: center;
    width: 730px;
    height: 20px;
    .dont-item {
      height: 20px;
      width: 20px;
      background-position: 3px -343px;
      cursor: pointer;
      &.active {
        background-position: -16px -343px;
      }
    }
  }
`

export const DownloadWrapper = styled.div`
  position: relative;
  width: 254px;
  height: 100%;
  background-position: 0 0;
  a {
    position: absolute;
    top: 186px;
    left: 19px;
    display: block;
    width: 215px;
    height: 56px;
    &:hover {
      background-position: 0 -290px;
    }
  }
`

export const ControlWrapper = styled.div`
  .left-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 90px;
    display: block;
    width: 37px;
    height: 68px;
    background-position: 0 -360px;
    cursor: pointer;
    &:hover {
      background-position: 0 -430px;
    }
  }
  .right-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 90px;
    display: block;
    width: 37px;
    height: 68px;
    background-position: 0 -508px;
    cursor: pointer;
    &:hover {
      background-position: 0 -578px;
    }
  }
`
