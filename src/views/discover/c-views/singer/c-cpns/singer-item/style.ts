import styled from "styled-components"

export const ItemWrapper = styled.div`
  .img {
    position: relative;
    .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: 0 -680px;
      cursor: pointer;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-size: 12px;
    .name {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .icon {
      position: relative;
      top: -1px;
      display: block;
      background-position: 0 -740px;
      width: 17px;
      height: 18px;
      cursor: pointer;
    }
  }
  .notImg {
    justify-content: start;
    .icon {
      margin-left: 3px;
    }
  }
`
