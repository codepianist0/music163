import styled from "styled-components"

export const MenuItemWrapper = styled.div`
  width: 118px;
  height: 150px;
  .top {
    position: relative;
    img {
      width: 100px;
      object-fit: cover;
    }
    .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: 0 -570px;
      cursor: pointer;
      &:hover .play-icon {
        display: block;
      }
      .play-icon {
        position: absolute;
        right: 22px;
        bottom: 5px;
        display: none;
        width: 22px;
        height: 22px;
        background-position: 0 -85px;
        &:hover {
          background-position: 0 -110px;
        }
      }
    }
  }
  .bottom {
    margin-top: 7px;
    font-size: 12px;
    span {
      display: inline-block;
      width: 110px;
    }
    .name {
      color: #000;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .author {
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
