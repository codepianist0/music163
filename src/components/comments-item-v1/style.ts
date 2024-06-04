import styled from "styled-components"

interface IComment {
  $isLiked: boolean
}
export const CommentWrapper = styled.div<IComment>`
  padding: 15px 0;
  display: flex;
  border-bottom: 1px dotted #ccc;
  font-size: 12px;
  > .img {
    margin-right: 15px;
  }
  > .info {
    flex: 1;
    .top {
      line-height: 20px;
      .name {
        cursor: pointer;
        color: ${(props) => props.theme.color.link};
        &:hover {
          text-decoration: underline;
        }
      }
      img {
        position: relative;
        top: -4px;
        margin: 0 5px;
        width: 36px;
        height: 12px;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      .left {
        color: #999;
      }
      .right {
        display: flex;
        .like {
          display: flex;
          align-items: center;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
          .icon {
            margin-right: 4px;
            width: 15px;
            height: 14px;
            display: inline-block;
            background-position: ${(props) => (props.$isLiked ? "-170px 0" : "-150px 0")};
            &:hover {
              background-position: ${(props) => (props.$isLiked ? "-170px 0" : "-150px -20px")};
            }
          }
        }
        .slice {
          margin: 0 5px;
          color: #ccc;
        }
        .return {
          color: #666;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`
