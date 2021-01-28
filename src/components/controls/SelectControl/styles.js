import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  cursor: pointer;
`

export const Select = styled.div`
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #dee0e1;
  max-width: 240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ isOpen }) => isOpen && `
    svg {
      transform-origin: center center;
      transform: rotate(180deg);
    }
  `}
`

export const SelectValue = styled.div`
  font-size: 15px;
  color: #4c505b;
  font-weight: 400;
  font-family: "Raleway";
  max-width: 150px;
  text-transform: capitalize;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const Options = styled.div`
  position: absolute;
  left: 0;
  max-height: 500px;
  z-index: 1;
  background-color: #ffffff;
  overflow-y: auto;
  min-width: 240px;
`

export const Option = styled.div`
  font-size: 15px;
  color: #4c505b;
  font-weight: 400;
  font-family: "Raleway";
  border: 1px solid #dee0e1;
  padding: 15px;
`
