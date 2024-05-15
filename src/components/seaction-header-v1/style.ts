import styled from "styled-components"

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-left: 34px;
  height: 33px;
  font-size: 12px;
  border-bottom: 2px solid #c10d0c;

  .left {
    position: relative;
    display: flex;
    align-items: center;
    .icon {
      position: absolute;
      left: -34px;
      top: 2px;
      display: block;
      width: 34px;
      height: 34px;
      background-position: -225px -156px;
    }
    .title {
      font-size: 20px;
      font-weight: 500;
      cursor: pointer;
    }
    .tab-list {
      display: flex;
      margin-left: 20px;
      height: 15px;
      .text {
        color: #666;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .slice {
        margin: 0 10px;
        color: #ccc;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    margin-right: 10px;
    color: #666;
    .more {
      display: flex;
      align-items: center;
      span {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .icon {
        margin-left: 4px;
        display: inline-block;
        width: 12px;
        height: 12px;
        background-position: 0 -240px;
      }
    }
  }
`
