import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`

export const MockDecoration = styled.div`
  width: 100%;
  height: 190px;
  background-color: #dedfe0;
`

export const Wrapper = styled.div`
  display: flex;
  margin: 50px 98px 50px 98px;
  @media (max-width: 730px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const FilterWrapper = styled.div`
  min-width: 240px;
  width: 240px;
  height: 100%;
  margin-right: 30px;
  @media (max-width: 730px) {
    margin-right: 0px;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 730px) {
    margin-top: 50px;
    justify-content: center;
  }
`
