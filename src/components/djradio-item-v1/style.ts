import styled from "styled-components"

export const ItemWrapper = styled.div`
  .content {
    display: flex;
    align-items: center;
    padding: 10px 0 10px 20px;
    height: 50px;
    &:hover {
      background-color: #eee;
      .name {
        .share {
          display: block !important;
        }
      }
    }
    .img {
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
    .name {
      position: relative;
      margin-left: 10px;
      padding-right: 38px;
      width: 500px;
      height: 100%;
      line-height: 50px;
      color: #333;
      .text {
        ${(props) => props.theme.mixin.showLine1}
        cursor: pointer;
      }
      .share {
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        position: absolute;
        display: none;
        width: 16px;
        height: 14px;
        background-position: -90px 0;
        cursor: pointer;
        &:hover {
          background-position: -90px -20px;
        }
      }
    }
    .subscribe {
      margin-left: 10px;
      width: 216px;
      color: #666;
    }
    .period {
      margin-left: 10px;
      width: 44px;
      color: #999;
    }
  }
`
