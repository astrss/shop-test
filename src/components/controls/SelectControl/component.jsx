import React, { useCallback, useState, useMemo } from 'react'
import isEmpty from 'lodash/isEmpty'
import ArrowIcon from './components/ArrowIcon'
import {
  Container,
  Select,
  SelectValue,
  Option,
  Options,
} from './styles'

const SelectControl = ({
  value, onChange, options, placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = useCallback((newValue) => () => {
    onChange(newValue)
    setIsOpen(false)
  }, [setIsOpen, onChange])

  const handleSwitchSelect = useCallback((value) => () => {
    setIsOpen(value)
  }, [setIsOpen])

  const selectedOption = useMemo(() => {
    const newOptions = [...options]
    if (value && !isEmpty(options)) {
      return newOptions.find((option) => option.id === value).name
    }
    return null
  }, [value, options])

  return (
    <Container>
      <Select isOpen={isOpen} onClick={handleSwitchSelect(!isOpen)}>
        <SelectValue>
          {selectedOption || placeholder}
        </SelectValue>
        <ArrowIcon />
      </Select>
      {isOpen && (
        <Options>
          {options.map((element) => (
            <Option onClick={handleSelect(element.id)} key={element.id}>
              {element.name}
            </Option>
          ))}
        </Options>
      )}
    </Container>
  )
}

export default React.memo(SelectControl)
