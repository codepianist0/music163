import styled from "styled-components"

export const HeaderV2Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  height: 24px;
  font-size: 12px;
  border-bottom: 1px solid #ccc;
  .title {
    font-weight: 700;
    color: #333;
  }
  .more {
    color: #666;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
