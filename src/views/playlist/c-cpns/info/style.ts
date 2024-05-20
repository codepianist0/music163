import styled from "styled-components"
interface ILeft {
  $isShowDesc: boolean
}
export const InfoWrapper = styled.div<ILeft>`
  display: flex;
  margin-bottom: 20px;
  .i-left {
    flex: 1;
    .img {
      position: relative;
      width: 200px;
      height: 200px;
      img {
        width: 100%;
      }
      .cover {
        position: absolute;
        width: 208px;
        height: 208px;
        top: -4px;
        left: -4px;
        background-position: 0 -1285px;
      }
    }
  }
  .i-righ {
    width: 410px;
    .list-name {
      display: flex;
      .tab {
        flex-shrink: 0;
        display: block;
        width: 54px;
        height: 24px;
        background-position: 0 -243px;
      }
      .name {
        font-weight: 500;
        color: #333;
        font-size: 20px;
        line-height: 24px;
      }
    }
    .list-author {
      display: flex;
      align-items: center;
      margin: 10px 0 20px;
      height: 35px;
      .name {
        margin: 0 0 0 10px;
        color: ${(props) => props.theme.color.link};
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .level {
        width: 13px;
        margin-right: 15px;
      }
      .date {
        color: #999;
      }
    }
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
    .list-tags {
      display: flex;
      align-items: center;
      margin: 25px 0 5px;
      height: 25px;
      .name {
        width: 36px;
        color: #666;
      }
      .tag {
        display: block;
        margin-right: 10px;
        height: 22px;
        line-height: 22px;
        padding-right: 10px;
        background-position: right -27px;
        color: #777;
        cursor: pointer;
        &:hover {
          background-position: right -27px;
          span {
            background-position: 0 -1400px;
          }
        }
        span {
          display: block;
          padding: 0 3px 0 13px;
          height: 22px;
          background-position: 0 0;
        }
      }
    }
    .desc-detail {
      display: flex;
      justify-content: flex-end;
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
          background-position: ${(props) => (props.$isShowDesc ? "-45px -520px" : "-65px -520px")};
        }
      }
    }
    .list-desc {
      margin-top: 4px;
      color: #666;

      ${(props) => {
        if (props.$isShowDesc) {
          return "height: auto;"
        }
        return "height: 180px; overflow: hidden;"
      }}
      line-height: 18px;
      white-space: pre-line;
    }
  }
`
