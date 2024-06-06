import styled from "styled-components"

export const MenuItemWrapper = styled.div`
  font-size: 12px;
  .name {
    margin: 8px 0 3px;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .author {
    display: flex;
    .by {
      color: #999;
    }
    .nickname {
      margin-left: 3px;
      max-width: 95px;
      color: #666;
      cursor: pointer;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      &:hover {
        text-decoration: underline;
      }
    }
    .icon {
      margin-left: 5px;
      width: 13px;
      height: 13px;
    }
  }
`
