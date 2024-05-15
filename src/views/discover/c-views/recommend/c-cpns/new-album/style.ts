import styled from "styled-components"

export const NewAlbumWrapper = styled.div`
  > .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0 30px;
    padding: 0 5px;
    height: 186px;
    border: 1px solid #d3d3d3;
    background-color: #f5f5f5;

    .control {
      .left {
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        width: 17px;
        height: 17px;
        background-position: -260px -75px;
        cursor: pointer;
        &:hover {
          background-position: -280px -75px;
        }
      }
      .right {
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        width: 17px;
        height: 17px;
        background-position: -300px -75px;
        cursor: pointer;
        &:hover {
          background-position: -320px -75px;
        }
      }
    }
    .banner {
      width: 645px;
      height: 150px;
      border: #d3d3d3;
    }
    .item {
      display: flex;
      justify-content: space-between;
    }
  }
`
