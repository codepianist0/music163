import styled from "styled-components"

export const TableWrapper = styled.div`
  font-size: 12px;
  table {
    border-collapse: collapse;
    table-layout: fixed;
    border: 1px solid #d9d9d9;
    width: 100%;
    thead {
      tr {
        background-color: #f7f7f7;
        th {
          padding: 8px 10px;
          height: 18px;
          background-position: 0 -56px;
          color: #666;
          font-weight: 500;
          text-align: left;
          &:first-child {
            width: 54px;
          }
          &:last-child {
            width: 128px;
          }
          &:nth-child(3) {
            width: 91px;
          }
          &:nth-child(2) {
            width: 215px;
          }
        }
      }
    }
    tbody {
      color: #333;
      tr {
        height: 31px;
        cursor: pointer;
        &:hover {
          .time {
            display: none;
          }
          .control {
            display: block;
          }
        }
        &:nth-child(2n-1) {
          background-color: #f7f7f7;
        }
        &:nth-child(-n + 3) {
          height: 70px;
          .top {
            height: 70px;
            box-sizing: border-box;
          }
          .name {
            line-height: 70px;
            img {
              margin-right: 15px;
              vertical-align: middle;
            }
          }
          .control {
            line-height: 70px;
          }
        }
        td {
          padding: 6px 10px;
          line-height: 18px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .top {
          display: block;
          justify-content: center;
          align-items: center;
          height: 100%;
          .index {
            margin-left: 5px;
            color: #999;
          }
          .new {
            display: inline-block;
            margin-left: 15px;
            width: 16px;
            height: 17px;
            background-position: -67px -283px;
          }
        }
        .name {
          div {
            width: 195px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .control {
          display: none;
          .icon {
            display: inline-block;
            margin-right: 4px;
          }
          .add {
            width: 13px;
            height: 13px;
            background-position: 0 -700px;
            &:hover {
              background-position: -22px -700px;
            }
          }
          .favor {
            width: 18px;
            height: 16px;
            background-position: 0 -174px;
            &:hover {
              background-position: -20px -174px;
            }
          }
          .share {
            width: 18px;
            height: 16px;
            background-position: 0 -195px;
            &:hover {
              background-position: -20px -195px;
            }
          }
          > .download {
            width: 18px;
            height: 16px;
            background-position: -81px -174px;
            &:hover {
              background-position: -104px -174px;
            }
          }
        }
        .singer {
          .name {
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`
