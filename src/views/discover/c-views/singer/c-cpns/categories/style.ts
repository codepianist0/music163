import styled from "styled-components"

export const CategoriesWrapper = styled.div`
  margin: 30px 0;
  padding: 0 10px;
  .item {
    .title {
      padding-left: 14px;
      height: 25px;
      line-height: 25px;
      font-size: 16px;
      color: #333;
    }
    .sub-title {
      padding-left: 27px;
      height: 29px;
      line-height: 29px;
      font-size: 12px;
      cursor: pointer;
      background-position: 0 -30px;
      &:hover {
        text-decoration: underline;
      }
      &.active {
        color: ${(props) => props.theme.color.primary};
        background-position: 0 0;
      }
    }
  }
`
