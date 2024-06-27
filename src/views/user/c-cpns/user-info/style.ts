import styled from "styled-components"

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 43px;
  color: #333;
  > .left {
    .img {
      position: relative;
      padding: 3px;
      width: 180px;
      height: 180px;
      img {
        z-index: 1;
        position: relative;
      }
      .cover {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 1px solid #d5d5d5;
        background-color: #fff;
      }
    }
  }
  > .right {
    width: 670px;
    > .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > .t-left {
        display: flex;
        align-items: center;
        height: 36px;
        .name {
          font-size: 22px;
          color: #000;
        }
        .level {
          position: relative;
          padding-left: 29px;
          margin-left: 10px;
          width: 45px;
          height: 19px;
          line-height: 20px;
          font-weight: 550;
          background-position: -135px -190px;
          box-sizing: border-box;
          color: #e03a24;
          .icon {
            position: absolute;
            right: -3px;
            display: inline-block;
            width: 9px;
            height: 19px;
            background-position: -191px -190px;
          }
        }
        .gender {
          display: block;
          margin-left: 9px;
          width: 20px;
          height: 20px;
          background-position: -41px -57px;
        }
        .button {
          margin-left: 15px;
          padding-left: 30px;
          height: 31px;
          line-height: 31px;
          box-sizing: border-box;
          cursor: pointer;
          font-size: 12px;
        }
        .message {
          width: 75px;
          background-position: 0 -810px;
          &:hover {
            background-position: 0 -845px;
          }
        }
        .favor {
          width: 70px;
          background-position: 0 -720px;
          color: #fff;
          &:hover {
            background-position: -80px -720px;
          }
        }
        .l-bottom {
          display: flex;
          align-items: center;
        }
      }
      > .t-right {
        align-items: flex-start;
        .home {
          box-sizing: border-box;
          width: 100px;
          padding-right: 4px;
          background-position: right -100px;
          cursor: pointer;
          background-position: right -182px;
          .text {
            display: block;
            padding-left: 20px;
            height: 31px;
            line-height: 31px;
            background-position: 0 -59px;
            font-size: 12px;
            &:hover {
              background-position: 0 -141px;
            }
          }
        }
      }
    }
    .authentication {
      display: flex;
      margin-top: 8px;
      .attestation {
        display: block;
        width: 68px;
        height: 20px;
        background-position: 0 -480px;
      }
      .text {
        margin-left: 6px;
        line-height: 20px;
        color: #666;
      }
    }
    .line {
      padding-bottom: 12px;
      margin-bottom: 10px;
      border-bottom: 1px solid #ddd;
    }
    .bottom {
      font-size: 12px;
      color: #666;
      .tab {
        display: flex;
        .t-item {
          cursor: pointer;
          &:hover {
            color: ${(props) => props.theme.color.link};
          }
          .number {
            font-size: 24px;
          }
        }
        .slice {
          margin: 0 20px 0 40px;
          width: 1px;
          height: 40px;
          background-color: #ddd;
        }
      }
      .area {
        margin-top: 15px;
      }
    }
  }
`
