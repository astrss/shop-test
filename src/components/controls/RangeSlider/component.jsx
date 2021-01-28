import React, { useCallback } from 'react'
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import {
  Container,
} from './styles'

const RangeSlider = ({
  onChange, min, max, value,
}) => {
  const [firstPrice, secondPrice] = value

  const handleSelect = useCallback((newValue) => {
    onChange(newValue)
  }, [onChange])

  return (
    <Container>
      <Range
        railStyle={{backgroundColor: '#d6d9e1'}}
        trackStyle={[{ backgroundColor: '#1cb8ff' }]}
        min={min}
        max={max}
        defaultValue={[firstPrice, secondPrice]}
        allowCross={false}
        onChange={handleSelect}
      />
    </Container>
  )
}

export default React.memo(RangeSlider)
