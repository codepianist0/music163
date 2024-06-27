import styled from "styled-components"

export const OpusWrapper = styled.div`
  margin-top: 20px;
  font-size: 12px;
  .top {
    display: flex;
    justify-content: space-between;
    height: 31px;
    margin-bottom: 20px;
    .left {
      .list-control {
        display: flex;
        height: 31px;
        .add {
          display: flex;
          margin-right: 5px;
          .play {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-right: 4px;
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
      }
    }
    .right {
      height: 31px;
      .select {
        position: relative;
        width: 102px;
        padding-right: 5px;
        height: 31px;
        background-position: right -100px;
        box-sizing: border-box;
        &:hover {
          .select-list {
            display: block;
          }
          background-position: right -182px;
          span {
            background-position: 0 -141px;
          }
        }
        .sprite_buttom {
          display: block;
          padding-left: 10px;
          height: 31px;
          line-height: 31px;
          text-align: center;
          background-position: 0 -59px;
          cursor: pointer;
          .icon {
            position: relative;
            top: -1px;
            margin-left: 3px;
            display: inline-block;
            width: 8px;
            height: 5px;
            background: url(${require("@/assets/img/icon3.png")});
          }
        }
        .select-list {
          display: none;
          position: absolute;
          top: 30px;
          margin-top: -2px;
          width: 102px;
          border: solid 1px #c3c3c3;
          border-bottom-right-radius: 4px;
          border-bottom-left-radius: 4px;
          box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
          background-color: #fff;
          box-sizing: border-box;
          font-family: simsun;
          .item {
            height: 30px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            background-color: #fff;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
            &:hover,
            &.active {
              background-color: rgba(0, 0, 0, 0.1);
            }
          }
        }
      }
    }
  }
  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    tr {
      height: 30px;
      box-sizing: border-box;
      &:hover {
        .time {
          display: none;
        }
        .control {
          display: flex;
        }
      }
      &:nth-child(2n-1) {
        background-color: #f7f7f7;
      }
      .column {
        padding: 6px 10px;
      }
      .frist {
        position: relative;
        width: 94px;
        box-sizing: border-box;
        .index {
          display: inline-block;
          color: #999;
        }
        .play {
          position: absolute;
          top: 6px;
          right: 17px;
          display: inline-block;
          width: 17px;
          height: 17px;
          background-position: 0 -103px;
          cursor: pointer;
          &:hover {
            background-position: 0 -128px;
          }
        }
      }
      .second {
        width: 309px;
        box-sizing: border-box;
        .t-name {
          white-space: nowrap;
          overflow: hidden;
          .main-name {
            cursor: pointer;
            ${(props) => props.theme.mixin.showLine1}
          }
          .sub-name {
            position: relative;
            top: 2px;
            display: inline-block;
            max-width: 160px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #999;
          }
        }
      }
      .time {
      }
      .control {
        display: none;
        .icon {
          position: relative;
          top: 8px;
          display: inline-block;
          margin-right: 4px;
          cursor: pointer;
        }
        .add {
          width: 13px;
          height: 13px;
          background-position: 0 -700px;
          &:hover {
            background-position: -22px -700px;
          }
        }
        .favor {
          width: 18px;
          height: 16px;
          background-position: 0 -174px;
          &:hover {
            background-position: -20px -174px;
          }
        }
        .share {
          width: 18px;
          height: 16px;
          background-position: 0 -195px;
          &:hover {
            background-position: -20px -195px;
          }
        }
        > .download {
          width: 18px;
          height: 16px;
          background-position: -81px -174px;
          &:hover {
            background-position: -104px -174px;
          }
        }
      }
      .album {
        ${(props) => props.theme.mixin.showLine1}
        cursor: pointer;
      }
    }
  }
`
