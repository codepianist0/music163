import styled from "styled-components"

export const CommentsWrapper = styled.div`
  margin-top: 30px;
  .publication {
    .top {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      .img {
        margin-right: 10px;
        width: 50px;
        height: 50px;
        img {
          width: 50px;
        }
      }
      .info {
        width: 100%;
        .ant-input-affix-wrapper {
          height: auto;
          border-radius: 0;
        }
        .ant-input {
          min-height: 50px;
          line-height: 19px;
          box-sizing: content-box;
        }
      }
    }
    .bottom {
      .control {
        display: flex;
        justify-content: space-between;
        margin-left: 60px;
        .left {
          display: flex;
          .icon {
            display: block;
            margin-right: 10px;
            width: 18px;
            height: 18px;
            cursor: pointer;
          }
          .expression {
            background-position: -40px -490px;
          }
          .link {
            background-position: -60px -490px;
          }
        }
        .right {
          .submit {
            width: 46px;
            height: 25px;
            line-height: 25px;
            color: #fff;
            text-align: center;
            background-position: -84px -64px;
            border-radius: 3px;
            cursor: pointer;
            &:hover {
              background-position: bottom;
            }
          }
        }
      }
    }
  }
  .newComments {
    .pagination {
      margin: 20px 0;
    }
    .ant-pagination-jump-prev {
      display: none;
    }
  }
`
