import styled from "styled-components"

export const LoginWrapper = styled.div`
  > .content {
    width: 100%;
    height: 126px;
    background-position: 0 0;
    font-size: 12px;
    color: #666;
    .desc {
      margin: 16px 22.5px;
      line-height: 22px;
    }
    .login {
      margin: 0 auto;
      width: 100px;
      height: 31px;
      text-shadow: 0 1px 0 #8a060b;
      text-align: center;
      line-height: 31px;
      color: #fff;
      cursor: pointer;
      background-position: 0 -195px;
      &:hover {
        background-position: -110px -195px;
      }
    }
  }
`
