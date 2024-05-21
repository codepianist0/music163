import styled from "styled-components"

export const MenuLyricWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 47px;
  width: 986px;
  height: 301px;
  margin: 0 auto;
  box-sizing: border-box;
  color: #fff;
  font-size: 12px;

  .top {
    display: flex;
    height: 41px;
    background-position: 0 0;
    .left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      width: 557px;
      height: 100%;
      box-sizing: border-box;
      h4 {
        font-size: 14px;
        color: #e2e2e2;
      }
      .control {
        display: flex;
        color: #ccc;
        .icon {
          display: block;
          margin-right: 5px;
        }
        .favor {
          display: flex;
          align-items: center;
          cursor: pointer;
          .favor-i {
            width: 16px;
            height: 16px;
            background-position: -24px 0;
          }
          &:hover {
            text-decoration: underline;
            .favor-i {
              background-position: -24px -20px;
            }
          }
        }
        .clear {
          display: flex;
          align-items: center;
          cursor: pointer;
          .clear-i {
            width: 13px;
            height: 16px;
            background-position: -51px 0;
          }
          &:hover {
            text-decoration: underline;
            .delete-i {
              background-position: -51px -20px;
            }
          }
        }
        .slice {
          margin: 0 10px;
          height: 15px;
          border-left: 1px solid #000;
          border-right: 1px solid #2c2c2c;
        }
      }
    }
    .right {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      .title {
        font-size: 14px;
        color: #fff;
      }
      .close {
        position: absolute;
        top: 5px;
        right: 10px;
        display: block;
        width: 30px;
        height: 30px;
        background-position: -195px 9px;
        cursor: pointer;
        &:hover {
          background-position: -195px -21px;
        }
      }
    }
  }
  .bottom {
    display: flex;
    height: 260px;
    background-position: -1014px 0;
    background-repeat: repeat-y;

    .scroll {
      width: 6px;
      height: 260px;
      background-color: #000;
    }
  }
`

export const ListWrapper = styled.div`
  width: 553px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0 !important;
  }

  color: #ccc;
  .l-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 28px;
    cursor: pointer;
    &:hover,
    &.active {
      background-color: rgba(0, 0, 0, 0.3);
      color: #fff;
    }
    &:hover {
      .i-right {
        .control {
          display: flex;
        }
      }
    }
    .i-left {
      display: flex;
      align-items: center;
      padding-left: 10px;
      width: 250px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .icon {
        display: block;
        margin-right: 10px;
        width: 10px;
        height: 13px;
        background-position: -182px 0;
      }
    }
    .i-right {
      display: flex;
      align-items: center;
      .control {
        display: none;
        align-items: center;
        justify-content: space-evenly;
        margin-right: 5px;
        width: 100px;
        height: 28px;
        .icon {
          display: block;
          height: 16px;
        }
        .favor {
          width: 16px;
          background-position: -24px 0;
          &:hover {
            background-position: -24px -20px;
          }
        }
        .share {
          width: 14px;
          background-position: 0 0;
          &:hover {
            background-position: 0 -20px;
          }
        }
        > .download {
          width: 14px;
          background-position: -57px -50px;
          &:hover {
            background-position: -80px -50px;
          }
        }
        .delete {
          width: 13px;
          background-position: -51px 0;
          &:hover {
            background-position: -51px -20px;
          }
        }
      }
      .authors {
        margin-right: 10px;
        width: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .author {
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .duration {
        margin-right: 10px;
      }
      .from {
        margin: 0 15px;
        width: 14px;
        height: 16px;
        background-position: -80px 0px;
        &:hover {
          background-position: -80px -20px;
        }
      }
    }
  }
`

export const LyricWrapper = styled.div`
  flex: 1;
  height: 260px;
  color: #989898;
  overflow: hidden;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 260px;
    transition: all 0.2s ease;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
    .item {
      width: 354px;
      line-height: 32px;
      text-align: center;
      font-size: 12px;
      &.active {
        color: #fff;
        font-size: 15px;
      }
    }
  }
`
