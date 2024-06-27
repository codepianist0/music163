import styled from "styled-components"

export const SingerWrapper = styled.div`
  ${(props) => props.theme.mixin.layout2}
  > .content {
    > .left {
      padding: 20px 30px 30px 39px;
      .name {
        display: flex;
        align-items: end;
        h2 {
          margin-right: 8px;
          color: #333;
          font-size: 24px;
          font-weight: 500;
        }
        span {
          color: #999;
        }
      }
      .banner {
        position: relative;
        margin-top: 10px;
        .cover {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.6));
          color: #333;
          .home {
            position: absolute;
            right: 116px;
            bottom: 18px;
            display: block;
            width: 96px;
            height: 32px;
            background-position: 0 -1156px;
            cursor: pointer;
            &:hover {
              background-position: 0 -1196px;
            }
          }
          .favor {
            position: absolute;
            right: 20px;
            bottom: 18px;
            display: block;
            width: 76px;
            height: 32px;
            background-position: 0 -500px;
            cursor: pointer;
            &:hover {
              background-position: 0 -540px;
            }
          }
        }
      }
    }
    > .right {
      padding: 20px 40px 40px 30px;
      box-sizing: border-box;
    }
  }
`
