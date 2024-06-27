import styled from "styled-components"

export const ItemWrapper = styled.div`
  .img {
    position: relative;
    width: 153px;
    height: 130px;
    .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: 0 -845px;
      cursor: pointer;
      &:hover {
        .play {
          display: block;
        }
      }
      .play {
        position: absolute;
        bottom: 5px;
        right: 30px;
        display: none;
        width: 28px;
        height: 28px;
        background-position: 0 -140px;
        &:hover {
          background-position: 0 -170px;
        }
      }
    }
  }
  font-family: Arial, Helvetica, sans-serif;
  .name {
    margin: 8px 0 8px;
    color: #000;
    ${(props) => props.theme.mixin.showLine1}
    cursor: pointer;
  }
  .author {
    font-size: 12px;
    color: #666;
    ${(props) => props.theme.mixin.showLine1}
    cursor: pointer;
  }
`
