import styled from "styled-components"

export const VideoWrapper = styled.div`
  .img {
    position: relative;
    width: 137px;
    height: 103px;
    .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: 0 -1170px;
      cursor: pointer;
      .play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 44px;
        height: 44px;
        background-position: -30px -135px;
        &:hover {
          background-position: -30px -85px;
        }
      }
    }
  }
  .i-name {
    margin: 8px 0 3px;
    width: 137px;
    ${(props) => props.theme.mixin.showLine1}
    cursor: pointer;
  }
`
