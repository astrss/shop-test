import React, { useCallback, useEffect, useMemo } from 'react'
import { Formik } from 'formik'
import isEmpty from 'lodash/isEmpty'
import useUrlParseAndPush from '../../hooks/useUrlParseAndPush'
import SelectField from '../../components/fields/SelectField'
import RangeSliderField from '../../components/fields/RangeSliderField'
import RadioGroupField from '../../components/fields/RadioGroupField'
import {
  Form,
  Title,
  FilterButtonContainer,
  Price,
  FilterButton
} from './styles'

const FilterForm = ({ allMockData, cardData, setCardData }) => {
  const [urlValues, setUrlValues] = useUrlParseAndPush()

  const handleFilter = useCallback((formValues) => {
    const filterKeys = Object.keys(formValues)
    const newCardData = [ ...allMockData.data].filter((card) => (
      filterKeys.every((key) => {
        if (!formValues[key]) {
          return true
        }
        if (key === 'price') {
          const [firstPrice, secondPrice] = formValues.price
          return card[key] >= firstPrice && secondPrice >= card[key]
        }
        if (Array.isArray(formValues[key])) {
          if (!formValues[key].length) {
            return true
          }
          return formValues[key].some((element) => +element === +card[key])
        }
        return card[key] === formValues[key]
      })
    ))
    setCardData(newCardData)
  }, [setCardData, allMockData.data])

  const correctCheckCategory = useMemo(() => {
    const { category } = urlValues
    if (category) {
      return Array.isArray(urlValues.category) ? [...urlValues.category] : [urlValues.category]
    }
    return []
  }, [urlValues])

  useEffect(() => {
    if (!isEmpty(urlValues)) {
      const newUrlValues = {
        ...urlValues,
        city: +urlValues.city || null,
        category: correctCheckCategory,
      }
      handleFilter(newUrlValues)
    }
  }, [])

  const handleSetValues = useCallback((formValues, isFormDirty) => () => {
    if (!isFormDirty) {
      return
    }
    setUrlValues(formValues)
    handleFilter(formValues)
  }, [setUrlValues, handleFilter])

  const maxPriceValue = useMemo(() => (
    allMockData.data.reduce((accumulator, currentValue) => (
      accumulator > currentValue.price ? accumulator : currentValue.price
    ), 0)
  ), [allMockData])

  return (
    <Formik
      enableReinitialize
      initialValues={{
        city: +urlValues.city || null,
        price: urlValues.price || [0, maxPriceValue],
        category: correctCheckCategory,
      }}
    >
      {({ values, dirty }) => (
        <Form>
          <Title>
            City
          </Title>
          <SelectField
            name="city"
            options={allMockData.city}
            placeholder="select city"
          />
          <Title withMargin>
            Categories
          </Title>
          <RadioGroupField
            name="category"
            options={allMockData.category}
            allData={allMockData.data}
          />
          <Title withMargin>
            Price
          </Title>
          <RangeSliderField name="price" min={0} max={maxPriceValue} allowCross={false} />
          <FilterButtonContainer>
            <Price>{`${values.price[0]} - ${values.price[1]}`}</Price>
            <FilterButton onClick={handleSetValues(values, dirty)}>Filter</FilterButton>
          </FilterButtonContainer>
        </Form>
      )}
    </Formik>
  )
}

export default React.memo(FilterForm)
