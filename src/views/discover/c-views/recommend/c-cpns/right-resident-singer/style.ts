import styled from "styled-components"

export const ResidentSingerWrapper = styled.div`
  margin-top: 15px;
  height: 455px;
  background: #fff;
  .singer-list {
    margin: 0 20px;
    .item {
      display: flex;
      margin-top: 14px;
      width: 100%;
      height: 62px;
      background-color: #fafafa;
      cursor: pointer;
      &:hover {
        background: #f4f4f4;
      }
      .left {
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 14px;
        border: 1px solid #e9e9e9;
        .name {
          font-weight: 700;
          color: #333;
        }
        .desc {
          font-size: 12px;
          color: #666;
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .add {
    margin: 14px 20px 0;
    width: 210px;
    height: 31px;
    font-size: 12px;
    font-weight: 600;
    line-height: 31px;
    text-align: center;
    background-color: #f7f7f7;
    border-radius: 5px;
    border: 1px solid #c3c3c3;
    cursor: pointer;
    &:hover {
      background-color: #fefefe;
    }
  }
`
