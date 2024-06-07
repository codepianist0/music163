import styled from "styled-components"

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 10px 0 10px 0;
  font-size: 12px;
  &:hover {
    .img {
      .cover {
        display: block;
      }
    }
  }
  .ranking {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 47px;
    font-size: 14px;
  }
  .img {
    position: relative;
    margin-right: 10px;
    .cover {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 22px;
      height: 22px;
      background-position: 0 -85px;
      cursor: pointer;
    }
  }
  .info {
    .name {
      width: 200px;
      height: 20px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      color: #333;
      &:hover {
        text-decoration: underline;
      }
    }
    .author {
      height: 20px;
      line-height: 20px;
      cursor: pointer;
      color: #999;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .progress {
    width: 100px;
    .ant-progress-inner {
      background: url(${require("@/assets/img/sprite_table.png")}) no-repeat 0 -240px;
    }
    .ant-progress-bg {
      background: url(${require("@/assets/img/sprite_table.png")}) no-repeat 0 -304px;
    }
  }
`
