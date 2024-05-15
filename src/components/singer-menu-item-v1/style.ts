import styled from "styled-components"

export const MenuItemWrapper = styled.div`
  width: 140px;
  height: 204px;
  margin-bottom: 20px;
  .top {
    position: relative;
    img {
      width: 100%;
      height: 140px;
      object-fit: cover;
    }
    .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: 0 0;
      cursor: pointer;
      .info {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 27px;
        font-size: 12px;
        color: #ccc;
        background-position: 0 -537px;
        .left {
          position: relative;
          top: 2px;
          .icon {
            position: relative;
            top: 1px;
            display: inline-block;
            margin: 0 5px 0 10px;
            width: 14px;
            height: 11px;
            background-position: 0 -24px;
          }
        }
        .right {
          .icon {
            position: relative;
            top: 2px;
            display: inline-block;
            margin-right: 10px;
            width: 16px;
            height: 17px;
            background-position: 0 0;
            cursor: pointer;
            &:hover {
              background-position: 0 -60px;
            }
          }
        }
      }
    }
  }
  .bottom {
    span {
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
