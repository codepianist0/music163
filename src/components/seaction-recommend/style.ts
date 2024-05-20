import styled from "styled-components"

export const RecommendWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
  height: 50px;
  > .left {
    img {
      width: 50px;
    }
  }
  > .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    .name {
      width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #333;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .author {
      display: flex;
      margin-top: 5px;
      height: 24px;
      font-size: 12px;
      line-height: 24px;
      .by {
        margin-right: 5px;
        color: #999;
      }
      .creator {
        width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #666;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
