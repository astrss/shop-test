import React, { useCallback, useMemo } from 'react'
import {
  Container,
  CheckBoxStyled,
  Label,
  LabelNumber,
} from './styles'

const RadioGroup = ({
  value, onChange, options, allData,
}) => {
  const handleChange = useCallback((id) => () => {
    if (value.some((element) => +element === +id)) {
      onChange([...value].filter((element) => +element !== +id))
    } else {
      onChange([...value, id])
    }
  }, [value, onChange])

  const objectOfcategoriesAmount = useMemo(() => (
    allData.reduce((accumulator, currentValue) => {
      if (accumulator.hasOwnProperty(currentValue.category)) {
        return {
          ...accumulator,
          [currentValue.category]: accumulator[currentValue.category] + 1,
        }
      }
      return {
        ...accumulator,
        [currentValue.category]: 1,
      }
    }, {})
  ), [allData])

  return (
    <>
      {options.map((option) => (
        <Container key={option.id}>
          <CheckBoxStyled
            active={value.some((element) => +element === +option.id)}
            onClick={handleChange(option.id)}
          />
          <Label>
            {option.name}
          </Label>
          <LabelNumber>
            {`(${objectOfcategoriesAmount[option.id] || 0})`}
          </LabelNumber>
        </Container>
      ))}
    </>
  )
}

export default React.memo(RadioGroup)
