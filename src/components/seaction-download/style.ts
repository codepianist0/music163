import styled from "styled-components"

export const DownloadWrapper = styled.div`
  .list {
    display: flex;
    justify-content: space-between;
    width: 200px;
    height: 65px;
    background-position: 0 -392px;
    .item {
      width: 42px;
      height: 48px;
      text-indent: -9999px;
      cursor: pointer;
    }
    .ios {
      cursor: pointer;
      &:hover {
        background-position: 0 -472px;
      }
    }
    .wos {
      width: 116px;
      height: 48px;
      &:hover {
        background-position: -42px -472px;
      }
    }
    .aos {
      &:hover {
        background-position: -158px -472px;
      }
    }
  }
  .desc {
    margin-top: 10px;
    font-size: 12px;
    color: #999;
  }
`
