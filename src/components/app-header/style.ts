import styled from "styled-components"

export const HeaderWrapper = styled.div`
  color: #ccc;
  background-color: #242424;
  height: 75px;
  .navBar {
    display: flex;
    justify-content: space-between;
    height: 70px;
    box-sizing: border-box;
    ${(props) => props.theme.mixin.wrapv1}
    border-bottom: 1px solid #000;
  }
  .bottom-line {
    height: 5px;
    background-color: ${(props) => props.theme.color.primary};
  }
`
export const LeaftWrapper = styled.div`
  display: flex;
  .logo-wrapper {
    height: 100%;
    .logo {
      display: block;
      width: 176px;
      height: 100%;
      background-position: 0 0;
      text-indent: -999px;
    }
  }
  .nav-list {
    display: flex;
    .item {
      position: relative;
      display: flex;
      &:hover,
      .active {
        background-color: #000;
        color: #fff;
      }
      .active {
        &::after {
          position: absolute;
          content: "";
          width: 12px;
          height: 7px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -226px 0;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      a {
        display: flex;
        align-items: center;
        padding: 0 19px;
        color: #ccc;
      }
    }
  }
`

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.size.secondary};
  .search {
    width: 158px;
    .search-content {
      height: 32px;
      border-radius: 18px;
      font-size: ${(props) => props.theme.size.secondary};
    }
    margin-right: 12px;
  }
  .artist-center {
    width: 90px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 18px;
    &:hover {
      border-color: #fff;
      color: #fff;
    }
  }
  .login {
    margin-left: 20px;
    cursor: pointer;
    span {
      color: #666;
      &:hover {
        color: #787878;
        text-decoration: underline;
      }
    }
  }
`
