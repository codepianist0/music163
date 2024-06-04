import styled from "styled-components"

interface IPagination {
  $canClick: boolean[]
}

export const PaginationWrapper = styled.div<IPagination>`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  line-height: 24px;
  font-size: 12px;
  user-select: none;

  .pages {
    display: flex;
    align-items: center;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 8px;
      margin: 0 1px 0 2px;
      height: 22px;
      border: 1px solid #ccc;
      border-radius: 3px;
      cursor: pointer;
      background-color: #fff;
      &:hover {
        border-color: #666;
      }
      &.active {
        border-color: #a2161b;
        background-position: 0 -650px;
        color: #fff;
      }
    }
  }
  .btn {
    width: 47px;
    height: 24px;
    border: 1px solid #ccc;
    border-radius: 3px;
    user-select: none;
    cursor: pointer;
  }
  .prev {
    padding-left: 22px;
    height: 24px;
    ${(props) => {
      if (!props.$canClick[0]) {
        return `
          background-position: 0 -620px;
          color: #cacaca;
          cursor: not-allowed;
        `
      } else {
        return `
          background-position: 0 -560px;
          color: #333;
          cursor: pointer;
          &:hover {
            background-position: 0 -590px;
          }
        `
      }
    }}
  }
  .next {
    padding-left: 12px;
    width: 57px;
    background-position: -75px -560px;
    ${(props) => {
      if (!props.$canClick[1]) {
        return `
          background-position: -75px -620px;
          color: #cacaca;
          cursor: not-allowed;
        `
      } else {
        return `
          background-position: -75px -560px;
          color: #333;
          cursor: pointer;
          &:hover {
            background-position: -75px -590px;
          }
        `
      }
    }}
  }
`
