import styled from "styled-components"

interface IInfo {
  $isShowDesc: boolean
}
export const InfoWrapper = styled.div<IInfo>`
  display: flex;
  justify-content: space-between;
  > .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 206px;
    .cover {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 206px;
      height: 205px;
      background-position: -140px -580px;
      .img-content {
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .link {
      display: flex;
      align-items: center;
      margin-top: 20px;
      font-size: 12px;
      text-decoration: underline;
      color: ${(props) => props.theme.color.link};
      cursor: pointer;
      .icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-position: -34px -863px;
      }
    }
    .open {
      margin-top: 10px;
      width: 176px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      background-color: rgba(40, 50, 72, 0.03);
      border: 1px solid rgba(40, 50, 72, 0.25);
      border-radius: 6px;
      color: rgb(40, 50, 72);
      cursor: pointer;
    }
  }
  > .right {
    width: 414px;
    font-size: 12px;
    .title {
      display: flex;
      .type {
        position: relative;
        top: 2px;
        padding: 0 20px 1px 8px;
        height: 27px;
        line-height: 27px;
        font-size: 13px;
        color: #fff;
        background: url(${require("@/assets/img/song_type_sprite.png")}) no-repeat;
        background-position: right;
        background-size: auto 100%;
      }
      .name {
        margin-left: 5px;
        font-size: 24px;
        color: #333;
        .chines {
          display: flex;
          align-items: center;
          .mv {
            position: relative;
            display: block;
            top: 2px;
            margin-left: 15px;
            display: block;
            width: 21px;
            height: 18px;
            background-position: 0 -18px;
            cursor: pointer;
          }
        }
        .english {
          margin-top: 5px;
          font-size: 14px;
          color: #bababa;
        }
      }
    }
    .singer {
      margin: 10px 0;
      .text {
        color: #999;
      }
    }
    .album {
      .text {
        color: #999;
      }
      margin: 10px 0;
    }
    .link {
      margin-left: 5px;
      color: ${(props) => props.theme.color.link};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .list-control {
      display: flex;
      height: 31px;
      .add {
        display: flex;
        margin-right: 5px;
        background: url(${require("@/assets/img/vip_button.png")});

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
      .v-add {
        display: flex;
        justify-content: space-between;
        margin-right: 6px;
        width: 113px;
        background: url(${require("@/assets/img/vip_button.png")}) no-repeat;
        background-size: auto 105%;
        color: #fff;
        box-sizing: border-box;
        line-height: 31px;
        .play {
          padding-left: 30px;
          cursor: pointer;
        }
        .push {
          width: 30px;
          cursor: pointer;
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
    .lyric {
      margin-top: 35px;
      line-height: 23px;
      .info {
        height: ${(props) => (props.$isShowDesc ? "auto" : "299px")};
        overflow: hidden;
        white-space: pre-wrap; /* 保留换行符 */
      }
      .is-hidden {
        display: flex;
        user-select: none;
        span {
          display: block;
          color: ${(props) => props.theme.color.link};
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
          .icon {
            display: inline-block;
            margin-left: 3px;
            width: 11px;
            height: 8px;
            background-position: ${(props) =>
              props.$isShowDesc ? "-45px -520px" : "-65px -520px"};
          }
        }
      }
    }
    .err {
      margin-top: 48px;
      text-align: end;
      text-decoration: underline;
      color: #999;
      cursor: pointer;
    }
  }
`
