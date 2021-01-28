import React from 'react'
import { Field } from 'formik'
import RadioGroup from '../../controls/RadioGroup'

const RadioGroupField = ({ ...ownProps }) => (
  <Field {...ownProps}>
    {({ field, form }) => {

      const onChange = (value) => {
        form.setFieldValue(field.name, value)
      }

      return (
        <RadioGroup
          {...ownProps}
          {...field}
          onChange={onChange}
        />
      )
    }}
  </Field>
)

export default React.memo(RadioGroupField)
