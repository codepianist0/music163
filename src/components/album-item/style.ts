import styled from "styled-components"

export const AlbumWrapper = styled.div`
  .img {
    position: relative;
    .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: -170px -850px;
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
  .name {
    margin: 8px 0 3px;
    ${(props) => props.theme.mixin.showLine2}
  }
  .time {
    margin-top: 5px;
    color: #666;
    font-size: 12px;
  }
`
