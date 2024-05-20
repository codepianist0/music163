import styled from "styled-components"

export const ListWrapper = styled.div`
  ${(props) => props.theme.mixin.layout1}
`

export const LeftWrapper = styled.div`
  padding: 47px 30px 40px 39px;
  font-size: 12px;
  > .download {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    height: 66px;
    p {
    }
    button {
      width: 120px;
      height: 30px;
      border: none;
      border-radius: 15px;
      background-image: linear-gradient(90deg, #ff5a4c 0%, #ff1d12 100%);
      color: #fff;
    }
  }
`

export const RightWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 40px 0 30px;
`
