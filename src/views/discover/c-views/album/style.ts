import styled from "styled-components"

export const AlbumWrapper = styled.div`
  ${(props) => props.theme.mixin.layout5}
  .title {
    font-size: 24px !important;
  }
  .album {
    .list {
      display: flex;
      flex-wrap: wrap;
      margin-left: -33px;
      margin-top: 20px;
      .item {
        margin-bottom: 30px;
        margin-left: 33px;
        width: 153px;
      }
    }
  }
`
