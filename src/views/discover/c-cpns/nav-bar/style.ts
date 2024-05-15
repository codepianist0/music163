import styled from "styled-components"

export const NavBarWrapper = styled.div`
  height: 30px;
  background-color: ${(props) => props.theme.color.primary};
  .nav-list {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    ${(props) => props.theme.mixin.wrapv1}
    box-sizing: border-box;
    padding-left: 180px;
    .nav-item {
      display: inline-block;
      padding: 0 13px;
      margin: 7px 17px 0;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      color: #fff;
      &:hover,
      &.active {
        border-radius: 10px;
        background-color: ${(props) => props.theme.color.secondary};
      }
    }
  }
`
