import styled from "styled-components"

export const RecommendWrapper = styled.div`
  > .content {
    display: flex;
    ${(props) => props.theme.mixin.wrapv2}
    border: 1px solid #d3d3d3;
    background-image: url(${require("@/assets/img/wrap-bg.png")});
    > .left {
      flex: 1;
      margin-right: 2px;
      padding: 20px 20px 40px;
    }
    > .right {
      width: 250px;
    }
  }
`
