import styled from "styled-components"

export const ListItemWrapper = styled.div`
  width: 230px;
  height: 100%;
  &:last-child {
    width: 228px;
  }
  .top {
    height: 120px;
    display: flex;
    padding: 20px 0 0 20px;
    box-sizing: border-box;
    .left {
      position: relative;
      width: 80px;
      height: 80px;
      img {
        width: 100%;
      }
      .cover {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: -145px -57px;
        cursor: pointer;
      }
    }
    .right {
      margin: 6px 0 0 10px;
      .name {
        color: #333;
        font-weight: 700;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .control {
        margin-top: 10px;
        .icon {
          display: inline-block;
          margin-right: 10px;
          width: 22px;
          height: 22px;
          cursor: pointer;
        }
        .paly {
          background-position: -267px -205px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        .favor {
          background-position: -300px -205px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }
  .list {
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      height: 32px;
      &:nth-child(-n + 3) {
        .index {
          color: ${(props) => props.theme.color.secondary};
        }
      }
      &:hover {
        .icon-list {
          display: flex;
        }
      }
      .index {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        width: 35px;
        height: 32px;
        font-size: 16px;
      }
      .name {
        flex: 1;
        font-size: 12px;
        line-height: 32px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .icon-list {
      display: none;
      align-items: center;
      margin-right: 10px;
      .icon {
        display: inline-block;
        margin-left: 8px;
        width: 17px;
        height: 17px;
        cursor: pointer;
      }
      .play {
        background-position: -267px -268px;
        &:hover {
          background-position: -267px -288px;
        }
      }
      .add {
        position: relative;
        top: 2px;
        left: 2px;
        background-position: 0 -700px;
        &:hover {
          background-position: -22px -700px;
        }
      }
      .favor {
        background-position: -297px -268px;
        &:hover {
          background-position: -297px -288px;
        }
      }
    }
  }
  .more {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 32px;
    font-size: 12px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
