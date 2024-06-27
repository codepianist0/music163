import styled from "styled-components"

export const DescWrapper = styled.div`
  margin-top: 20px;
  .desc {
    .title {
      display: flex;
      align-items: center;
      margin: 28px 0 8px;
      font-size: 14px;
      font-weight: 700px;
      .icon {
        display: inline-block;
        margin-right: 7px;
        width: 3px;
        height: 14px;
        background-color: ${(props) => props.theme.color.primary};
      }
    }
    p {
      text-indent: 2em;
    }
  }
  .order {
    .title {
      display: flex;
      align-items: center;
      margin: 28px 0 8px;
      font-size: 14px;
      font-weight: 700px;
    }
  }
  p {
    line-height: 25px;
    color: #666;
    text-indent: 0em;
    font-size: 12px;
    white-space: pre-line;
  }
`
