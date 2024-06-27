import styled from "styled-components"

export const SingerWrapper = styled.div`
  ${(porps) => porps.theme.mixin.layout4}
  > .content {
    > .right {
      padding: 40px;
      .title {
        font-size: 24px;
      }
      .hot {
        .hot-list {
          margin: 20px 0;
          margin-left: -17px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .item {
            margin-left: 17px;
            margin-bottom: 30px;
            width: 130px;
            .name {
              max-width: 100px;
              ${(props) => props.theme.mixin.showLine1}
            }
          }
          .line {
            margin-bottom: 20px;
            width: 100%;
            height: 1px;
            border-top: 1px dotted #333;
          }
          .bottom-item {
            margin: 0;
            height: 30px;
            padding-left: 17px;
          }
        }
      }
    }
  }
`
