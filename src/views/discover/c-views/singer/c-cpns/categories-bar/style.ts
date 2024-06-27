import styled from "styled-components"

export const BarWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  height: 24px;
  justify-content: space-between;
  .item {
    display: flex;
    align-items: center;
    padding: 0 6px;
    border-radius: 2px;
    cursor: pointer;
    &:nth-child(1),
    &:nth-last-child(1) {
      font-size: 12px;
    }
    &.active {
      color: #fff;
      background-color: ${(props) => props.theme.color.primary};
    }
  }
`
