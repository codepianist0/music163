import styled from "styled-components"

export const RadioAllWrapper = styled.div`
  margin-top: 20px;
  .top {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 24px !important;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .t-item {
      width: 426px;
      .r-list {
        .item {
          &:nth-child(2n) {
            background-color: #f7f7f7;
          }
          &:hover {
            background-color: #eee;
          }
        }
      }
    }
    .rank {
      .item {
        color: #999;
        &:nth-child(-n + 3) {
          color: ${(props) => props.theme.color.primary};
        }
      }
    }
  }
`
