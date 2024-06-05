import styled from "styled-components"

export const TopWrapper = styled.div`
  display: flex;
  padding: 40px 0;
  font-size: 12px;
  .img {
    position: relative;
    margin-right: 30px;
    padding: 3px;
    border: 1px solid #ccc;
    .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: -230px -380px;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      font-size: 20px;
      font-weight: 500;
      color: #333;
    }
    .update-time {
      display: flex;
      align-items: center;
      height: 35px;
      color: #666;
      .icon {
        display: block;
        margin-right: 3px;
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
      }
    }
    .control {
      margin-top: 20px;
    }
  }
`
