import styled from "styled-components"

export const SubTitleWrapper = styled.div`
  .sub-title {
    display: flex;
    .item {
      ${(props) => props.theme.mixin.showLine1}
      .text {
        cursor: pointer;
      }
      .slice {
        margin: 0 10px;
      }
    }
  }
`
