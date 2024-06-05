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
            padding: 0;
            width: 65px;
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
      tr {
        &:nth-child(-n + 3) {
          .name {
            display: flex;
            align-items: center;
            padding: 10px;
            img {
              margin-right: 15px;
            }
            .text {
              width: 120px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
        &:nth-child(2n-1) {
          background-color: #f7f7f7;
        }
        &:hover {
          .time {
            display: none;
          }
          .control {
            display: table-cell;
          }
        }
        td {
          &.top {
            padding: 6px 10px;
            text-align: center;
            .index {
              display: inline-block;
              margin-left: 5px;
              color: #999;
            }
            .new {
              position: relative;
              top: 5px;
              display: inline-block;
              margin-left: 15px;
              width: 16px;
              height: 17px;
              background-position: -67px -283px;
            }
          }
          &.name {
            display: flex;
            padding: 6px 10px;
            img {
              cursor: pointer;
            }
            .play {
              display: inline-block;
              margin-right: 5px;
              width: 20px;
              height: 18px;
              background-position: 0 -103px;
              cursor: pointer;
              &:hover {
                background-position: 0 -128px;
              }
            }
            .text {
              width: 220px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              line-height: 18px;
              cursor: pointer;
              .n-name:hover {
                text-decoration: underline;
                .tns {
                  text-decoration: none;
                }
              }
              .tns {
                color: #999;
              }
            }
          }
          &.time {
            padding: 6px 10px;
          }
          &.control {
            display: none;
            padding: auto 10px;
            .list {
              height: 18px;
              .icon {
                display: inline-block;
                margin-right: 4px;
                cursor: pointer;
              }
              .add {
                position: relative;
                top: -3px;
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
          }
          &.singer {
            .singer-list {
              width: 175px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              .author {
                cursor: pointer;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
  }
`
