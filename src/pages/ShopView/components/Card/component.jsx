import React from 'react'
import {
  CardContainer,
  CardImgContainer,
  CardImg,
  CardTitle,
  CardInfo,
  CardText,
  CardAdditionalInfo,
  CardCategories,
  CardPrice,
} from './styles'

const Card = ({ title, category, price, src }) => {
  return (
    <CardContainer>
      <CardImgContainer>
        <CardImg src={src} />
        <CardTitle>{title}</CardTitle>
      </CardImgContainer>
      <CardInfo>
        <CardText>Affiliate Marketing - A Beginner's Guide to Earning Online</CardText>
        <CardAdditionalInfo>
          <CardCategories>{category}</CardCategories>
          <CardPrice>${price}</CardPrice>
        </CardAdditionalInfo>
      </CardInfo>
    </CardContainer>
  )
}

export default React.memo(Card)
