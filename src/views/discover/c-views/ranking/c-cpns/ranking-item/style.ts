import styled from "styled-components"

export const ItemWrapper = styled.div`
  display: flex;
  padding: 10px 0 10px 20px;
  height: 42px;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
  &.active {
    background-color: #e6e6e6;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    .name {
    }
    .update {
      margin-top: 8px;
      color: #999;
    }
  }
`
