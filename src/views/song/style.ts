import styled from "styled-components"

export const SongWrapper = styled.div`
  ${(props) => props.theme.mixin.layout2}
  .content {
    > .left {
      padding: 40px 30px 40px 39px;
    }
    > .right {
      padding: 0 40px 0 30px;
      box-sizing: border-box;
    }
  }
`
