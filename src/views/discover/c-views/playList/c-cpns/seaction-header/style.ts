import styled from "styled-components"

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-size: 12px;
  border-bottom: 2px solid ${(props) => props.theme.color.primary};
  > .left {
    display: flex;
    align-items: center;
    .title {
      font-size: 24px;
      font-weight: 500;
      color: #333;
    }
    .categories {
      margin-left: 12px;
      padding-right: 5px;
      width: 91px;
      height: 31px;
      box-sizing: border-box;
      background-position: right -100px;
      cursor: pointer;
      &:hover {
        background-position: right -182px;
        .text {
          background-position: 0 -141px;
        }
      }
      &:active {
        background-position: right -264px;
        .text {
          background-position: 0 -223px;
        }
      }
      .text {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: ${(props) => props.theme.color.link};
        background-position: 0 -59px;
        .icon {
          position: relative;
          top: 1px;
          display: block;
          margin-left: 3px;
          width: 8px;
          height: 5px;
          background-position: -70px -543px;
        }
      }
    }
  }
  > .right {
    .hot {
      width: 46px;
      height: 29px;
      line-height: 29px;
      text-align: center;
      border-radius: 3px;
      color: #fff;
      background-position: 0 0;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
