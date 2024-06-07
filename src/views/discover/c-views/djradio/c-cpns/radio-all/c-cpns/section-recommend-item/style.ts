import styled from "styled-components"

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 10px 0 10px 20px;
  font-size: 12px;
  &:hover {
    .img {
      .cover {
        display: block;
      }
    }
  }
  .img {
    position: relative;
    margin-right: 10px;
    .cover {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 22px;
      height: 22px;
      background-position: 0 -85px;
      cursor: pointer;
    }
  }
  .info {
    .name {
      width: 250px;
      height: 20px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      color: #333;
      &:hover {
        text-decoration: underline;
      }
    }
    .author {
      height: 20px;
      line-height: 20px;
      cursor: pointer;
      color: #999;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .button {
    padding: 3px 6px;
    margin-left: 20px;
    border: 1px solid #999;
    color: #999;
    cursor: pointer;
    &:hover {
      color: #666;
      border-color: #666;
    }
  }
`
