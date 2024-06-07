import styled from "styled-components"

export const ItemWrapper = styled.div`
  display: flex;
  .img {
    margin-right: 15px;
    cursor: pointer;
  }
  .info {
    .name {
      margin: 16px 0 20px;
      width: 250px;
      font-weight: 700;
      font-size: 18px;
      ${(props) => props.theme.mixin.showLine2}
    }
    .desc {
      font-size: 12px;
      color: #999;
    }
  }
`
