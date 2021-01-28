import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
`

export const Title = styled.div`
  font-size: 18px;
  color: #33363e;
  font-weight: 700;
  font-family: "Montserrat";
  text-transform: uppercase;
  margin-bottom: 30px;
  ${({ withMargin }) => withMargin && `
    margin-top: 60px;
  `}
`

export const FilterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  justify-content: space-between;
`

export const Price = styled.div`
  font-size: 16px;
  color: #33363e;
  font-weight: 400;
  font-family: "Montserrat";
  margin-right: 35px;
`

export const FilterButton = styled.div`
  background-color: #1cb8ff;
  font-size: 14px;
  color: #ffffff;
  font-weight: 400;
  font-family: "Montserrat";
  text-transform: uppercase;
  padding: 12px 28px;
  cursor: pointer;
`
