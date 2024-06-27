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
    }
  }
  .name {
    margin: 8px 0 3px 0;
  }
  .time {
    margin-top: 5px;
    color: #666;
    font-size: 12px;
  }
`
