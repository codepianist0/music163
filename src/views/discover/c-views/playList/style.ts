import styled from "styled-components"

export const PlaylistWrapper = styled.div`
  ${(props) => props.theme.mixin.wrapv3}
  border: 1px solid #d3d3d3;
  > .content {
    padding: 40px;
    min-height: 200px;
    background-color: #fff;
  }
`
