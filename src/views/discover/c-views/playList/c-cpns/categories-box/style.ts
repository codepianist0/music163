import styled from "styled-components"

export const BoxWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 40px;
  width: 720px;
  height: 400px;
  .top {
    height: 32px;
    background-position: 0 0;
    .icon {
      position: relative;
      left: 90px;
      top: 1px;
      display: inline-block;
      width: 24px;
      height: 11px;
      background-position: -48px 0;
    }
  }
  .content {
    padding: 0 9px;
    background-position: -720px 0;
    background-repeat: repeat-y;
    .all {
      padding-left: 26px;
      height: 37px;
      border-bottom: 1px solid #e6e6e6;
      .btn {
        width: 75px;
        height: 26px;
        background-position: 0 -64px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .sub {
      display: flex;
      flex-direction: column;
      .item {
        display: flex;
        .left {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 16px;
          width: 96px;
          border-right: 1px solid #e6e6e6;
          font-weight: 700;
          .icon {
            display: block;
            margin-right: 5px;
            width: 24px;
            height: 24px;
          }
        }
        .right {
          display: flex;
          flex-wrap: wrap;
          flex: 1;
          padding-top: 16px;
          padding-left: 15px;
          font-size: 12px;
          color: #333;
          .sub-item {
            display: inline-block;
            margin-top: 5px;
            .name {
              display: inline-block;
              padding: 2px 6px;
              cursor: pointer;
              &:hover {
                text-decoration: underline;
              }
              &.active {
                color: #fff;
                background-color: #a7a7a7;
              }
            }
            .slice {
              display: inline-block;
              margin: 0 8px 0 10px;
              color: #d8d8d8;
            }
          }
        }
      }
    }
  }
  .bottom {
    height: 20px;
    background-position: -1440px -12px;
  }
`
