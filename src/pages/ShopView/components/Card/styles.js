import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 270px;
  background-color: #ffffff;
  border: 1px solid #e9e9e9;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.15);
  height: fit-content;
  margin-bottom: 30px;
  margin-left: 30px;
  @media (max-width: 730px) {
    margin-left: 0px;
  }
`

export const CardImgContainer = styled.div`
  position: relative;
`

export const CardImg = styled.img`
  width: 100%;
  height: 180px;
  min-height: 180px;
`

export const CardTitle = styled.div`
  position: absolute;
  left: 20px;
  bottom: 18px;
  font-size: 13px;
  letter-spacing: 0px;
  line-height: 22px;
  color: #ffffff;
  font-weight: 500;
  font-family: "Raleway";
`

export const CardInfo = styled.div`
  padding: 20px 20px 25px 20px;
`

export const CardText = styled.div`
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 22px;
  color: #33363e;
  font-weight: 400;
  font-family: "Montserrat";
  margin-bottom: 25px;
`

export const CardAdditionalInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardCategories = styled.div`
  font-size: 13px;
  letter-spacing: 0px;
  line-height: 22px;
  color: #a6a9af;
  font-weight: 500;
  font-family: "Raleway";
`

export const CardPrice = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #282d3b;
  font-weight: 400;
  font-family: "Montserrat";
  text-align: right;
`
