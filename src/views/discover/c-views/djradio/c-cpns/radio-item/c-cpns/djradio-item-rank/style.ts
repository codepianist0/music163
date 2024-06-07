import styled from "styled-components"

export const RankItemWrapper = styled.div`
  display: flex;
  .img {
    width: 120px;
    height: 120px;
    margin-right: 15px;
    cursor: pointer;
  }
  .info {
    flex: 1;
    font-size: 12px;
    .name {
      margin: 15px 0;
      font-size: 18px;
      font-weight: 700;
      ${(props) => props.theme.mixin.showLine2}
    }
    .author {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      height: 22px;

      color: #333;
      .user {
        position: relative;
        top: -2px;
        display: block;
        margin-right: 8px;
        width: 14px;
        height: 15px;
        background-position: -50px -300px;
      }
      .text {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .level {
        margin-left: 3px;
        width: 13px;
      }
    }
    .order {
      display: flex;
      color: #999;
      .issues {
        margin-right: 15px;
      }
    }
  }
`
