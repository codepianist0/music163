import styled from "styled-components"

export const BarWrappert = styled.div`
  .content {
    display: flex;
    height: 39px;
    background-position: 0 0;
    background-repeat: repeat-x;
    border: 1px solid #ccc;
    border-width: 0 1px;
    box-sizing: border-box;
    .item {
      position: relative;
      padding-left: 2px;
      width: 136px;
      line-height: 39px;
      text-align: center;
      cursor: pointer;
      .right {
        display: block;
        width: 100%;
        height: 100%;
      }
      &.active {
        position: relative;
        background-position: left -90px;
        padding-left: 2px;
        .right {
          background-position: right -90px;
        }
      }
      &:hover {
        background-position: -5px -45px;
        .right {
          background-position: right -45px;
        }
      }
    }
  }
`
