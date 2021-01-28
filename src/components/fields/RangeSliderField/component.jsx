import React from 'react'
import { Field } from 'formik'
import RangeSlider from '../../controls/RangeSlider'

const RangeSliderField = ({ ...ownProps }) => (
  <Field {...ownProps}>
    {({ field, form }) => {
      const onChange = (value) => {
        form.setFieldValue(field.name, value)
      }

      return (
        <RangeSlider
          {...field}
          {...ownProps}
          onChange={onChange}
        />
      )
    }}
  </Field>
)

export default React.memo(RangeSliderField)
