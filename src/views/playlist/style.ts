import styled from "styled-components"

export const ListWrapper = styled.div`
  ${(props) => props.theme.mixin.layout1}
`
export const LeftWrapper = styled.div`
  padding: 47px 30px 40px 39px;
  .info {
    height: 361px;
    display: flex;
    .i-left {
      flex: 1;
      .img {
        position: relative;
        width: 200px;
        height: 200px;
        img {
          width: 100%;
        }
        .cover {
          position: absolute;
          width: 208px;
          height: 208px;
          top: -4px;
          left: -4px;
          background-position: 0 -1285px;
        }
      }
    }
    .i-righ {
      width: 410px;
      .list-name {
        display: flex;
        .tab {
          flex-shrink: 0;
          display: block;
          width: 54px;
          height: 24px;
          background-position: 0 -243px;
        }
        .name {
          font-weight: 500;
          color: #333;
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
  }
`

export const RightWrapper = styled.div``
