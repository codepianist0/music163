import styled from "styled-components"

export const RankingWrapper = styled.div`
  ${(props) => props.theme.mixin.layout3}
  .content {
    > .right {
      padding: 0 30px 0 40px;
    }
    .comment {
      margin: 30px 0 20px;
    }
  }
`
