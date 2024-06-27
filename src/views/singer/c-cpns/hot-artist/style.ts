import styled from "styled-components"

export const HotArtistWrapper = styled.div`
  .artist-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -25px;
    .item {
      margin-left: 25px;
      width: 50px;
      height: 92px;
      font-size: 12px;
      .img {
        cursor: pointer;
      }
      .name {
        margin-top: 7px;
        ${(props) => props.theme.mixin.showLine1}
        cursor: pointer;
      }
    }
  }
`
