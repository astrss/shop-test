import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-bottom: 17px;
`

export const CheckBoxStyled = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  border: 1px solid #d5d7d8;
  margin-right: 8px;
  ${({ active }) => active && `
    ::after {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      top: 1px;
      left: 0;
      right: 0;
      content: '';
      width: 6px;
      height: 9px;
      border: solid #1cb8ff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
    border: 1px solid #1cb8ff;
  `}
`

export const Label = styled.div`
  font-size: 15px;
  color: #4c505b;
  font-weight: 400;
  font-family: "Raleway";
  margin-right: 8px;
`

export const LabelNumber = styled.div`
  font-size: 15px;
  color: #a6a9af;
  font-weight: 400;
  font-family: "Open Sans";
`
