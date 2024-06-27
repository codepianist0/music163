import styled from "styled-components"

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  font-size: 12px;
  border-bottom: 2px solid ${(props) => props.theme.color.primary};
  .left {
    display: flex;
    align-items: end;
    .title {
      font-size: 20px;
      font-weight: 500;
      color: #333;
    }
    .sub-title {
      margin-left: 20px;
      color: #666;
    }
  }
  .right {
    display: flex;
    .create_link {
      margin-right: 20px;
      text-decoration: underline;
      color: ${(props) => props.theme.color.link};
      cursor: pointer;
      .icon {
        position: relative;
        top: 4px;
        display: inline-block;
        width: 16px;
        height: 16px;
        background-position: -34px -863px;
      }
    }
    .paly-counter {
      position: relative;
      top: 5px;
      color: #666;
      span {
        margin: 0 0 0 5px;
        font-weight: 700;
        color: ${(props) => props.theme.color.primary};
      }
    }
    .more {
      color: #666;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`
