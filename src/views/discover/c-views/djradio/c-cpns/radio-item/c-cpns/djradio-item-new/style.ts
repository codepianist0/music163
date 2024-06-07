import styled from "styled-components"

export const DjradioItemWrapper = styled.div`
  .img {
    cursor: pointer;
  }
  .info {
    .name {
      width: 140px;
      margin: 13px 0 6px;
      ${(props) => props.theme.mixin.showLine2}
    }
    .desc {
      color: #999;
      font-size: 12px;
    }
  }
`
