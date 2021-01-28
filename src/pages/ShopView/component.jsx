import React, { useCallback, useState } from 'react'
import FilterForm from '../../forms/FilterForm'
import Card from './components/Card'
import cardImg from '../../assets/images/card.png'
import mockData from '../../mocks'
import {
  Container,
  MockDecoration,
  Wrapper,
  FilterWrapper,
  CardContainer,
} from './styles'

const ShopView = () => {
  const [cardData, setCardData] = useState(mockData.data)

  const handleFindCardInfoName = useCallback((id, name) => (
    mockData[name].find((element) => element.id === id).name
  ), [])

  return (
    <Container>
      <MockDecoration />
      <Wrapper>
        <FilterWrapper>
          <FilterForm allMockData={mockData} cardData={cardData} setCardData={setCardData} />
        </FilterWrapper>
        <CardContainer>
          {cardData.map((card) => (
            <Card
              key={card.id}
              src={cardImg}
              title={handleFindCardInfoName(card.city, 'city')}
              category={handleFindCardInfoName(card.category, 'category')}
              price={card.price}
            />
          ))}
        </CardContainer>
      </Wrapper>
      <MockDecoration />
    </Container>
  )
}

export default React.memo(ShopView)
