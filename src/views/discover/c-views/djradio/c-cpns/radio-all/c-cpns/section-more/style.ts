import styled from "styled-components"

export const MoreWrapper = styled.div`
  margin-top: 40px;
  .title {
    font-size: 24px !important;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > .item {
      padding: 20px 0;
      width: 435px;
      border-bottom: 1px solid #e7e7e7;
    }
  }
`
