import styled from "styled-components"
import police from "@/assets/img/police.png"

export const FooterWrapper = styled.div`
  width: 100%;
  border-top: 1px solid rgb(211, 211, 211);
  background: #f2f2f2;
  ${(props) => props.theme.mixin.wrapv3}
`
export const EnterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 20px;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 71px;
    i {
      display: block;
      width: 45px;
      height: 45px;
      background-position: -170px -5px;
      cursor: pointer;
      &:hover {
        background-position: -5px -115px;
      }
    }
    span {
      margin-top: 10px;
    }
  }
`
export const BottomWrapper = styled.div`
  margin: 60px 0 30px;
  color: #666;
  font-size: 12px;

  a {
    cursor: pointer;
    color: #666;
    line-height: 24px;
    &:hover {
      text-decoration: underline;
    }
  }
  .section {
    display: flex;
    justify-content: center;
    height: 24px;
    line-height: 24px;
  }
  .links {
    span {
      margin: 0 8px;
    }
  }
  .report {
    .email {
      margin: 0 15px;
    }
  }
  .permit {
    margin-right: 5px;
  }
  .plice {
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url(${police}) no-repeat center/90%;
  }
`
