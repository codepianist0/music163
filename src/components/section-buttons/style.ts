import styled from "styled-components"

export const ButtonWrapper = styled.div`
  font-size: 12px;
  .list-control {
    display: flex;
    height: 31px;
    font-family: simsun;
    .add {
      display: flex;
      margin-right: 5px;
      .play {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 5px;
        width: 61px;
        height: 31px;
        background-position: left -387px;
        color: #fff;
        cursor: pointer;
        &:hover {
          background-position: left -469px;
          .icon {
            background-position: -28px -1622px;
          }
        }
        .icon {
          display: inline;
          margin: 3px 2px 2px 0;
          width: 20px;
          height: 18px;
          background-position: 0 -1622px;
        }
      }
      .push {
        width: 31px;
        height: 31px;
        background-position: 0 -1588px;
        cursor: pointer;
        &:hover {
          background-position: -40px -1588px;
        }
      }
    }
    /* 样式抽取 */
    .p-left {
      margin-right: 6px;
      padding-right: 5px;
      height: 31px;
      span {
        display: block;
        padding: 0 2px 0 28px;
        height: 31px;
        text-align: center;
        line-height: 31px;
      }
    }
    .favor {
      background-position: right -1020px;
      cursor: pointer;
      &:hover {
        background-position: right -1106px;
        span {
          background-position: 0 -1063px;
        }
      }
      span {
        background-position: 0 -977px;
      }
    }
    .share {
      background-position: right -1020px;
      cursor: pointer;
      &:hover {
        background-position: right -1106px;
        span {
          background-position: 0 -1268px;
        }
      }
      span {
        background-position: 0 -1225px;
      }
    }
    > .download {
      margin: 0 6px 0 0;
      background-position: right -1020px;
      cursor: pointer;
      &:hover {
        background-position: right -1106px;
        span {
          background-position: 0 -2805px;
        }
      }
      span {
        background-position: 0 -2761px;
      }
    }
    .comments {
      background-position: right -1020px;
      cursor: pointer;
      &:hover {
        background-position: right -1106px;
        span {
          background-position: 0 -1508px;
        }
      }
      span {
        background-position: 0 -1465px;
      }
    }
  }
`
