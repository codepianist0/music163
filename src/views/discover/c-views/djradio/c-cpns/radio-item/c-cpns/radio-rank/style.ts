import styled from "styled-components"

export const RankWrapper = styled.div`
  margin-top: 30px;
  .title {
    font-size: 24px !important;
  }
  .r-content {
    display: flex;
    color: #666;
    cursor: pointer;
    .tab {
      &.active {
        color: ${(props) => props.theme.color.primary};
      }
    }
    .slice {
      margin: 0 5px;
      color: #c7c7c7;
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      padding: 20px 0;
      width: 435px;
      border-bottom: 1px solid #e7e7e7;
    }
  }
`
