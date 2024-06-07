import styled from "styled-components"

interface IBanner {
  $noneNext: boolean
  $nonePrev: boolean
}
export const BannerWrapper = styled.div<IBanner>`
  position: relative;
  .banner-item {
    display: flex;
    flex-wrap: wrap;
    margin-left: -33px;
    height: 100%;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-left: 33px;
      margin-bottom: 25px;
      width: 70px;
      height: 70px;
      cursor: pointer;
      &.active {
        background-position: -70px 0;
        .name {
          color: #d35757;
        }
      }
      &:hover {
        background-color: #f6f7f7;
      }
      .icon {
        display: block;
        width: 48px;
        height: 48px;
      }
      .name {
        text-align: center;
        color: #888;
        font-size: 12px;
      }
    }
  }
  .dont {
    display: flex;
    justify-content: center;
    height: 20px;
    .item {
      display: block;
      width: 20px;
      height: 20px;
      background-position: 0 0;
      cursor: pointer;
      &:hover,
      &.active {
        background-position: -30px 0;
      }
    }
  }
  .control {
    i {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      width: 20px;
      height: 30px;
    }
    .left {
      left: -15px;
      background-position: 0 -30px;
      opacity: ${(props) => (props.$nonePrev ? "0.08" : "0.25")};
      cursor: ${(props) => (props.$nonePrev ? "auto" : "pointer")};
      &:hover {
        opacity: ${(props) => (props.$nonePrev ? "0.08" : "0.4")};
      }
    }
    .right {
      right: -15px;
      opacity: ${(props) => (props.$noneNext ? "0.08" : "0.25")};
      background-position: -30px -30px;
      cursor: ${(props) => (props.$noneNext ? "auto" : "pointer")};
      &:hover {
        opacity: ${(props) => (props.$noneNext ? "0.08" : "0.4")};
      }
    }
  }
`
