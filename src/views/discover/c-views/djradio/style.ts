import styled from "styled-components"

export const DJRadioWrapper = styled.div`
  ${(props) => props.theme.mixin.wrapv3}
  border: 1px solid #d3d3d3;
  > .content {
    padding: 40px;
    background-color: #fff;
  }
`
