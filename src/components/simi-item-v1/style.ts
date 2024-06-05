import styled from "styled-components"

export const SimiItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  height: 32px;
  font-size: 12px;
  > .left {
    .name {
      width: 150px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .author {
      margin-top: 4px;
      color: #999;
      span {
        margin-right: 5px;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
  > .right {
    display: flex;
    align-items: center;
    .icon {
      display: block;
      width: 10px;
      height: 11px;
      opacity: 0.9;
      cursor: pointer;
    }
    .play {
      margin-right: 16px;
      background-position: -69px -455px;
      &:hover {
        opacity: 1;
      }
    }
    .push {
      background-position: -87px -454px;
      &:hover {
        opacity: 1;
      }
    }
  }
`
