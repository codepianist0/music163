import styled from "styled-components"

export const HotAnchorWrapper = styled.div`
  margin-top: 30px;
  margin: 0 20px;
  .anthor-list {
    overflow: hidden;
    .item {
      display: flex;
      margin-bottom: 15px;
      .left {
        width: 40px;
        img {
          width: 100%;
          cursor: pointer;
        }
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 14px;
        font-size: 12px;
        .name {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        .desc {
          width: 150px;
          margin-top: 5px;
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
`
